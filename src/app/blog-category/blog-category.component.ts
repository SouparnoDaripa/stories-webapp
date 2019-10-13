import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit {

  constructor() { }
  categoryName = 'Creativity';
  ngOnInit() {

    (($) => {
      initTopSlider();
      initEventsSlider();

      /*

      6. Init Top Slider

      */

      function initTopSlider() {
        if ($('.sidebar_slider_top').length) {
          const topSlider = $('.sidebar_slider_top');
          topSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            smartSpeed: 1200,
            dots: true,
            dotsContainer: '.custom_dots_top',
            nav: false
          });

          if ($('.custom_prev_top').length) {
            $('.custom_prev_top').on('click', () => {
              topSlider.trigger('prev.owl.carousel');
            });
          }

          if ($('.custom_next_top').length) {
            $('.custom_next_top').on('click', () => {
              topSlider.trigger('next.owl.carousel');
            });
          }

          /*Custom dots events */
          if ($('.custom_dot_top').length) {
            $('.custom_dot_top').on('click', (ev) => {
              const dot = $(ev.target);
              $('.custom_dot_top').removeClass('active');
              dot.addClass('active');
              topSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          }

          /*Change active class for dots when slide changes by nav or touch */
          topSlider.on('changed.owl.carousel', (event) => {
            $('.custom_dot_top').removeClass('active');
            $('.custom_dots_top li').eq(event.page.index).addClass('active');
          });
        }
      }

      /*

      8. Init Events Slider

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

      $('.parallax-window').parallax({imageSrc: '../../assets/images/category.jpg'});
      $(window).scrollTop(0);
    })(jQuery);
  }

}
