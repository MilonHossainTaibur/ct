        <div class="side-widget">
         <a href="#website-enquiry" data-toggle="modal" data-target="#website-enquiry" class="enquiry">ENQUIRY</a>
      </div>

      <footer id="footer" class="gray-bg-container" style="background-color:#E9E9EA;">
         <div class="container text-center">
            <div class="footer-logo">
               <img src="img/ctlogofooter.png" height="105px" alt="Home">
            </div>
           
            <div class="footer-links-wrapper mob-mt-30">
               <ul class="list-inline theme-green contact-links">
                  <li><a href="tel:+8801614099907" title="+01614559697"><p style="color:#0e1f82;"><img src="sites/all/themes/schwingstetter/images/telephone.png" alt="Phone Number" title="Phone Number">+8801614099907<p></a></li>
                  <li><a href="mailto:concrete.schwing@gmail.com" title="concrete.schwing@gmail.com"><p style="color:#0e1f82;"><img src="sites/all/themes/schwingstetter/images/email-opened-envelope.png" alt="Email" title="Email">concrete.schwing@gmail.com</p></a></li>
                  
               </ul>
               <ul class="list-inline site-links mob-mt-30 hidden-xs">
                  <li><a href="index.php" title="Home">Home</a></li>
                  <li><a href="about.php" title="About Us">About Us</a></li>
                  <li><a href="products.php" title="Products">Products</a></li>
               
                  <li><a href="contact.php" title="Contact">Contact</a></li>
               </ul>
            </div>

            <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <address>102, Darul Yusuf Apartment Bhaban, 1 W Agargaon, Dhaka-1207</address>
               </div>
            </div>
            <p class="copy-text">Copyright &copy; Concrete Technology <?php echo date('Y');?>. All rights reserved. </p>
         </div>
      </footer>
      <script src="sites/all/themes/schwingstetter/js/slick.min.js"></script>
      <!--TEST CAPTCHA--->
      <script src='../www.google.com/recaptcha/api.js'></script>
      <script>
         function get_action(form) 
         {
             var v = grecaptcha.getResponse();
             if(v.length == 0)
             {
                 document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
                 return false;
             }
             else
             {
                  document.getElementById('captcha').innerHTML="Captcha completed";
                 return true; 
             }
         }
         
      </script>
      <!-- TEST CAPTCHA ENDS--->
      <!-- Product Enquiry Form -->







      <div id="website-enquiry" class="website-enquiry modal fade" role="dialog">
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">&times;</button>
               <h4 class="modal-title">Enquiry</h4>
            </div>
            <div class="modal-body">


               <form class="form-horizontal pro-enq-form" id="enqu" action="mail_handler.php" method="POST">
                   <div class="form-group">
                     <label class="col-sm-4" for="name">Full Name</label>
                     <div class="col-sm-8">
                        <input class="form-control" id="name" required=""  maxlength="40" name="name" size="20" type="text">
                     </div>
                  </div>
                   <div class="form-group">
                     <label class="col-sm-4" for="email">Email</label>
                     <div class="col-sm-8">
                        <input class="form-control" id="email" required=""  maxlength="40" name="email" size="20" type="text">
                     </div>
                  </div>
                   <div class="form-group">
                     <label class="col-sm-4" for="mobile">Mobile</label>
                     <div class="col-sm-8">
                        <input class="form-control" id="mobile" required=""  maxlength="40" name="mobile" size="20" type="text">
                     </div>
                  </div>
                   <div class="form-group">
                     <label class="col-sm-4" for="first_name">Message</label>
                     <div class="col-sm-8">
                        
                        <textarea class="form-control" name="message" placeholder="Enter Any Message"></textarea>
                     </div>
                  </div>


                  <span id="captcha" style="color:red" /></span> <!-- this will show captcha errors -->
                  <!--TEST CAPTCHA END-->
                  <div class="text-center">
                     <button type="submit" class="btn btn-lg" name="submit" style="">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <script src="js/js_FbpwIZNwgzwEuuL4Q2HOM07BOSCY5LxL_gwSK4ohQBM.js"></script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-33351875-1"></script>
     
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-33351875-1');
      </script>
   </body>

</html>