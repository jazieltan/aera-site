/*
 * Attitude
 * Author: WPlook Studio
 *
*/
(function($) {
  "use strict";

  var attitude = {
    /* ===== Start Functions ===== */
    startAtt: function() {
      attitude.FoundationAtt();
      attitude.AosAtt();
      attitude.OpacityFadeAtt();
      // attitude.OwlCarouselAtt();
      attitude.SliderEnrichedAtt();
      attitude.submitFormAtt();
    },

    /* ===== Init Foundatio Site ===== */
    FoundationAtt: function() {
      jQuery(document).foundation();
    },

    submitFormAtt: function() {
      var abide = document.getElementById('prompt');
      var sendForm = document.getElementById("submitForm");
      // chaining of listeners
      $(document)
        // .on("forminvalid.zf.abide", function(ev, frm) {
        //   console.log("Form id " + ev.target.id + " is invalid");
        // })
        // .on("formvalid.zf.abide", function(ev, frm) {
        //   console.log("Form id " + frm.attr("id") + " is valid");
        //   // ajax post form
        // })
        .on("submit", function(ev) {
          ev.preventDefault();
          console.log(ev.target.id + " Prevented Reload");
          abide.innerHTML = "Your Message has been sent, We will get back to you soon!"
          abide.style.display = "block";
          var elements = document.getElementsByClassName("formVal");
          var formData = new FormData();

          for (var i = 0; i < elements.length; i++) {
            formData.append(elements[i].name, elements[i].value);
          }
          // creates new XMLHttpRequest Object
          var xmlHttp = new XMLHttpRequest();
          // checks if xml request is successfull.
          xmlHttp.addEventListener('load', function () {
            if (xmlHttp.status == 200) {
              console.log("Sent!");
            }
            else{
              abide.innerHTML = "We tried to send a message but failed please try again?"
              console.log("failed");
            }
          });
          xmlHttp.open("post", "form.php");
          xmlHttp.send(formData);
        });
    },
    /*     submitFormAtt: function() {
      var abide = document.getElementById('prompt');
      var sendForm = document.getElementById("submitForm");
      sendForm.addEventListener("click", submitForm);
      function submitForm(e) {
        var elements = document.getElementsByClassName("formVal");
        var formData = new FormData();
        for (var i = 0; i < elements.length; i++) {
          formData.append(elements[i].name, elements[i].value);
        }
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.addEventListener('load', function() {
            if (xmlHttp.status == 200 && elements[0].value !== '') {
              console.log("Sent!");
              abide.innerHTML = "Your Message has been sent, We will get back to you soon!"
              abide.style.display = "block";
            }
            else {
              $('#inquiryForm').foundation('addErrorClasses', $el);
              abide.innerHTML = "There are some problems with your details"
              abide.style.display = "block";
            }
          });
        e.preventDefault();
        xmlHttp.open("post", "form.php");
        xmlHttp.send(formData);
      }
    }, */
    AosAtt: function() {
      AOS.init({
        offset: 50,
        duration: 600,
        easing: "ease-in-sine"
      });
    },

    /* ===== Opacity for hiding elements ===== */
    OpacityFadeAtt: function() {
      var fadeStart = 10,
        fadeEnd = 600,
        fade = $(".slide-content");
      $(window).on("scroll", function() {
        var offset = $(document).scrollTop(),
          opacity = 0;
        if (offset <= fadeStart) {
          opacity = 1;
        } else if (offset <= fadeEnd) {
          opacity = 1 - offset / fadeEnd;
        }
        fade.css("opacity", opacity);
      });
    },

    /* ===== Slider classes ===== */
    SliderEnrichedAtt: function() {
      $(document).on("changed.zf.slider", function(e, $handle) {
        $("#js-contribution-value").text($handle["0"].attributes[7].value);
        var current_procent = parseInt(
          $handle["0"].style.left.replace(/data-/g, ""),
          10
        );
        current_procent > 1
          ? $("#dot-0").addClass("full")
          : $("#dot-0").removeClass("full");
        current_procent >= 25
          ? $("#dot-25").addClass("full")
          : $("#dot-25").removeClass("full");
        current_procent >= 50
          ? $("#dot-50").addClass("full")
          : $("#dot-50").removeClass("full");
        current_procent >= 75
          ? $("#dot-75").addClass("full")
          : $("#dot-75").removeClass("full");
        current_procent > 99
          ? $("#dot-100").addClass("full")
          : $("#dot-100").removeClass("full");
      });
    }
  };

  jQuery(document).ready(function() {
    attitude.startAtt();
  });
})(jQuery);