<?php include'header.php'; ?>
 <style type="text/css" media="screen">

   body{margin-top:20px;}

.margin30 {
    margin-bottom: 30px;
}

.item-img-wrap {
    position: relative;
    text-align: center;
    overflow: hidden;
}

.item-img-wrap img {
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    width: 100%;
}

/************************image hover effect*******************/
.item-img-wrap {
  position: relative;
  text-align: center;
  overflow: hidden;
}

.item-img-wrap img {
  -moz-transition: all 200ms linear;
  -o-transition: all 200ms linear;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  width: 100%;
  height: 300px;
}

.item-img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.item-img-overlay span {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(http://bootstraplovers.com/templates/assan-2.2/main-template/img/plus.png) no-repeat center center rgba(0, 0, 0, 0.7);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  -moz-transition: opacity 250ms linear;
  -o-transition: opacity 250ms linear;
  -webkit-transition: opacity 250ms linear;
  transition: opacity 250ms linear;
}

.item-img-wrap:hover .item-img-overlay span {
  opacity: 1;
}

.item-img-wrap:hover img {
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


/*************pagination***********/
.gallery-bottom .pagination {
  margin-top: 0px;
}

.pagination > li > a, .pagination > li > span {
  background-color: #ccc;
  padding: 3px 9px;
  color: #fff;
  border: 0px;
}

.pagination > li > a {
  margin-right: 5px;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
  background-color: #32c5d2;
}
    
 </style>

<div class="main-container">
   <div class="region region-content">
      <section id="block-system-main" class="block block-system clearfix">
         <div class="panel-display main-container clearfix" >
            <section class="banner banner-small">
               <img src="img/gbg.jpg" alt="Gallery Banner" title="Gallery Banner" class="img-responsive" />
            </section>
            <section class="container welcome-container">
               <div class="underlined-title-container">
                  <h2  style="color:#0e1f82!important; font-size:3.5rem; font-family: 'brandongrotesque-bold'; padding-top:20px; text-transform: uppercase; text-align:center;"><b>Gallery</b></h2>
               </div>
            </section>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div id="grid" class="row">
                               <div class="mix col-sm-3 page1 page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/slider1.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page2 page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/slider2.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 page2 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/slider3.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/slider4.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/slider5.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/slider6.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                                <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/slider7.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/slider8.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/1.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/2.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 
                            </div>  

                                <div class="mix col-sm-3 page1 page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/3.jpg" class="img-responsive" alt="workimg">
                                  
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page2 page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/4.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 page2 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/5.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/6.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/7.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/8.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/9.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/10.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 
                            </div>  
                            <div class="mix col-sm-3 page1 page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/11.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page2 page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/12.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 page2 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/13.jpg" class="img-responsive" alt="workimg">
                                    
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/14.jpg" class="img-responsive" alt="workimg">
                                  
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/15.jpg" class="img-responsive" alt="workimg">
                                 
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/16.jpg" class="img-responsive" alt="workimg">
                                   
                                </div> 

                            </div>
                            <div class="mix col-sm-3  page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/17.jpg" class="img-responsive" alt="workimg">
                                  
                                </div> 

                            </div>
                            <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/18.jpg" class="img-responsive" alt="workimg">
                                 
                                </div> 
                            </div>  
                             <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/19.jpg" class="img-responsive" alt="workimg">
                                 
                                </div> 
                            </div> 
                             <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="img/gallery/20.jpg" class="img-responsive" alt="workimg">
                                 
                                </div> 
                            </div> 
                                                                                   
                        </div><!--grid-->
                    </div>
                </div>
            </div>


          
         </div>
      </section>
   </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="/javascripts/application.js" type="text/javascript" charset="utf-8" async defer>
   // MDB Lightbox Init
   jQuery(function () {
   jQuery("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
   });
</script>
<?php include'footer.php'; ?>