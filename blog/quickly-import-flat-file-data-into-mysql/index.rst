.. title: Quickly Import Flat-File Data into MySQL
.. slug: quickly-import-flat-file-data-into-mysql
.. date: 2016-03-17 00:00:00 UTC-05:00
.. tags: nikola, python, demo, blog
.. author: Cris Favero
.. link: 
.. description:
.. category: administrative
Quickly Import Flat-File Data into MySQLI often find myself needing to import flat file data from various vendors. Recently I decided to try and simplify this for most of the basic cases and create a simple converter using standard *nix commands. It attempts to semi optimize the mysql to do batch inserts to speed things up. There are a lot of presumptions made in this script that could be easily modified to fit your needs.

Firstly, this assumes that your input is a tab separated file with no quoting of fields. This obviously also implies your data can not have tabs in it. if you have a simple CSV you may have luck replacing the \t on line 11 with a , to import CSV files.

Secondly, rather than intelligently trying to guess or ask for data types to create the table this assumes text type, which you can than more quickly convert in mysql into more appropriate fields. Alternatively you can manually create a more appropriate table first and comment out lines 6 and 7.

.. code:: bash

    SOURCE_TAB_SEPARATED_FILE='input_file.tsv'; \  
    DESTINATION_SQL_FILE='batch_import.sql';  \  
    BATCH_SIZE=10000; \  
    INSERT_SIGNATURE='INSERT INTO tmp_batch_insert '; \  
    #write create table statement using  first line to determine number of columns \
    head -n1 ${SOURCE_TAB_SEPARATED_FILE}| \  
    awk -F'\t' 'BEGIN{printf "CREATE TABLE tmp_batch_insert("} { for(i = 1; i <= NF; i++) { printf "f"i" text," } }'|awk '{gsub(/,$/, ");"); print}'> "${DESTINATION_SQL_FILE}" && \  
    #start writing actual files \
    cat "${SOURCE_TAB_SEPARATED_FILE}" | \  
    # Replace tabs with: double-quote comma double-quote. \
    awk '{gsub(/\t/, "\",\""); print}'  | \  
    # To beginning of the line add: open-parentheses double-quote. \
    awk '{gsub(/^/, "(\""); print}' | \  
    # To the end of the line add: double-quote closed-parentheses. \
    awk '{gsub(/$/, "\")"); print}' | \  
    # For-each: print the entire line with a comma. Every $BATCH_SIZE line start with the $INSERT_SIGNATURE and use a semicolon instead of a comma. Start the first line with the $INSERT_SIGNATURE. \
    awk -v n=${BATCH_SIZE}  'NR % n != 1 && NR % n != 0  {print $0","} ;NR % n == 0 {print $0";"};NR % n == 1 {print "'"${INSERT_SIGNATURE}"' VALUES \n"$0","}' >> "${DESTINATION_SQL_FILE}" && \  
    # replace trailing comma with a semicolon \
    sed '$ s/,$/;/' "${DESTINATION_SQL_FILE}" > "tmp.${DESTINATION_SQL_FILE}" && mv "tmp.${DESTINATION_SQL_FILE}" "${DESTINATION_SQL_FILE}"  

While there are many other ways this can be done, some potentially cleaner, it gets the job done and in a fairly efficient manner with regards to MySQL.