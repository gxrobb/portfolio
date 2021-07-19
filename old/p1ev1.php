<?php include('header.php') ?>
<body>
    
<?php include('nav.php') ?>

<section class="project">
    <div class="container">


        <div class="project-heading-wrapper">
            <div class="project-title">
                <h2>Player One Esports V1</h2>
                <p>UI/UX And Front-End Development</p>
            </div>
            <div class="view-button">
               <a href="assets/images/port/thumbs/p1full.png" target="_blank"><button class="btn"><p>View Design</p></button></a>
            </div>
        </div>
        
        <div class="project-image">
                <img src="assets/images/port/thumbs/p1v1.jpg" class="img-responsive" alt="Player One Esports"> 
        </div>

        <div class="project-description-wrapper">
            <div class="about">
                <h2>Project Description</h2>
               <p>This project was one of the few development projects I had where I was not asked to build it in wordpress. I decided that the scope of the page itself was so small that It did not need such a robust CMS in order to build it. The goal for this design was a placeholder page for the real page coming after it.</p>

                <p>The challenges on this project were learning to work with Google Private Cloud and SparkPost API. I went ahead and set up a GCP server for this project and began to develop just using raw HTML/SASS/JS. </p>

                <p>With the help of some quick jQuery scripting, I was able to create a toggleable section for the games, displaying a little blurb depending on which game you click on. Not long after that, I was asked to capture email signups and send notification through the page. That is when the SparkPost API came in. Google Private Cloud is not capable of sending emails on it’s own, (or forbids it actually) so it has us go through somewhere else.</p>

                <p>Once that was established, the client wanted a way to drive engagement in their discord channel. They asked me to add a pop up modal on the page on load. I was able to convince them that doing this was not in their best interest, and I talked them down to on the first load ever. That of course caused more work for me, so I played with some cookies until I got it just right!</p>





            </div>
        </div>
    </div>
</section>

<?php include('footer.php') ?>


</body>

</html>
