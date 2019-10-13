import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-sidebar-popular',
  templateUrl: './sidebar-popular.component.html',
  styleUrls: ['./sidebar-popular.component.css']
})
export class SidebarPopularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (($) => {
      initEventsSlider();

      /*
      1. Init Events Slider
      */

      function initEventsSlider() {
        if ($('.sidebar_slider_events').length) {
          const vidSlider = $('.sidebar_slider_events');
          vidSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            smartSpeed: 1200,
            dots: true,
            dotsContainer: '.custom_dots_events',
            nav: false
          });

          if ($('.custom_prev_events').length) {
            $('.custom_prev_events').on('click', () => {
              vidSlider.trigger('prev.owl.carousel');
            });
          }

          if ($('.custom_next_events').length) {
            $('.custom_next_events').on('click', () => {
              vidSlider.trigger('next.owl.carousel');
            });
          }

          /*Custom dots events */
          if ($('.custom_dot_events').length) {
            $('.custom_dot_events').on('click', (ev) => {
              const dot = $(ev.target);
              $('.custom_dot_events').removeClass('active');
              dot.addClass('active');
              vidSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          }

          /*Change active class for dots when slide changes by nav or touch */
          vidSlider.on('changed.owl.carousel', (event) => {
            $('.custom_dot_events').removeClass('active');
            $('.custom_dots_events li').eq(event.page.index).addClass('active');
          });
        }
      }
    })(jQuery);
  }

}
