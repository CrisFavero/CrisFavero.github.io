.. slug: 
.. title:  
.. hidetitle: True
.. template: homepage.tmpl

.. raw:: html

    <section id="jumbo" class="d-flex vw-100 vh-100 p-0 flex-column">
        <div class="m-0 jumbo-shading row h-100 x-100">
            <header class="row w-75 my-auto mx-auto text-left" >
                <div class="nameplate col-12">
                    <h4 class="pb-0">I am</h4>
                    <div class="display-4 pb-3 name">Cris Favero</div>
                    <h4>New Yorker,<br>Cloud Solutions Engineer,<br>Photographer</h4>
                    <ul class="text-secondary list-inline">
                        <li class="list-inline-item"><a href="http://linkedin.com/in/crisfavero"><i class="fab fa-linkedin"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.instagram.com/marioatlp"><i class="fab fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="https://github.com/CrisFavero"><i class="fab fa-github"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.facebook.com/the.cris.favero"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="https://twitter.com/marioatlp"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div id="downArrow" class="align-content-end mx-auto d-md-none">
                    <i class="fas fa-angle-down fa-3x"></i>
                </div>
            </header>
        </div>
    </section>
    {{% navbar %}}
    <section id="recent_photos" class="d-none section-padding" >
        <main class="container p-3">
            <div class="row">
             <h1 class='col-12 text-center'>Recent Photos</h1>
                <div class="col-lg-12 text-center">
                    <div id="myGrid" class="row grid-padding">
                        <div class="p-1 col-md-4 col-sm-4 padding-right-zero d-block">
                            <img src="https://source.unsplash.com/random/900x500?1" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/600x200?2" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/900x500?3" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/300x500?4" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/500x400?a" class="img-thumbnail mx-auto">
                        </div>
                        <div class="p-1 col-md-4 col-sm-4 padding-right-zero">
                            <img src="https://source.unsplash.com/random/900x500?5" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/400x500?6" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/900x700?7" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/800x500?8" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/900x900?9" class="img-thumbnail mx-auto">
                        </div>
                        <div class="p-1 col-md-4 col-sm-4 padding-right-zero">
                            <img src="https://source.unsplash.com/random/900x500?10" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/300x800?11" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/1200x700?12" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/600x500?13" class="img-thumbnail mx-auto">
                            <img src="https://source.unsplash.com/random/400x500?14" class="img-thumbnail mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
    <section id="recent_thoughts" class="section-padding d-none" >
        <main class="container" style="height:300px">
            <h1 class='p-4 text-center'>Recent Posts</h1>
            <div class="row">
                {{% post-list stop=5 %}}{{% /post-list %}}
            </div>
        </main>
    </section>
    <section id="who_am_i" class="section-padding" >
        <main class="container" >
            <h1 class='text-center p-4'>Who Am I?</h1>
            <div class="row p-3">
                <div class="col-lg-4 col-md-4 col-sm-12 text-center my-auto">
                    <img src="images/profile-cris.jpg" class="rounded-circle">
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 desc ">
                    
                    <h2 class="name">Cris Favero</h2>
                    <p>It all started on a dark and stormy day in November...</p>

                    <p>I guess you can say I was destined to become an engineer — I exhibited this mindset early. At the age of 5, I would bore my family explaining how rides worked rather than just enjoying the amusement of them. Around 10, I graduated taking apart and fixing broken electronics like VCR's, and stereos, and scaring the owners of them in the process. At age 12 a teacher at school showed me how to program using BASIC, and I was hooked! So It comes as no surprise now that I ended up doing it professionally as an adult.</p>

                    <p>As a software engineer, I really enjoy working for great companies in the startup world. I've worked at Unroll.me, Slice, and am now I'm at Flipboard. Through the years at these companies my breadth of knowledge has grown exponentially and at this point would consider myself an expert in developing cloud-centric distributed systems. I'm always open to discussing what systems like this look like in more depth so if this interests you reach out to me!</p>

                    <p>No one is defined just by their work though!</p>
                    <p>Outside of work, I walk miles and miles a day, I consider myself an avid photographer, a fan of consuming all forms of science-fiction, and am now exploring the world of writing a novel. I enjoy exploring the edges of photography and always playing with new techniques, styles, and subjects. You can view the fruit of that labor in the photography section of this site. I'm continually looking for other artists and models to collaborate with for photography shoots, so If you like what you see here, please, reach out to me!</p>
                </div>
            </div>
        </main>
    </section>