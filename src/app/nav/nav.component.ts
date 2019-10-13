import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function ($) {
      let header = $('.header');
      let menuActive = false;
      let menu = $('.menu');
      let burger = $('.hamburger');

      setHeader();

      $(window).on('resize', function()
      {
        setHeader();
      });

      $(document).on('scroll', function()
      {
        setHeader();
      });

      initMenu();

      /* 

      2. Set Header

      */

      function setHeader()
      {
        if($(window).scrollTop() > 100)
        {
          header.addClass('scrolled');
        }
        else
        {
          header.removeClass('scrolled');
        }
      }

      /* 

      3. Init Menu

      */

      function initMenu()
      {
        if($('.menu').length)
        {
          var menu = $('.menu');
          if($('.hamburger').length)
          {
            burger.on('click', function()
            {
              if(menuActive)
              {
                closeMenu();
              }
              else
              {
                openMenu();

                $(document).one('click', function cls(e)
                {
                  if($(e.target).hasClass('menu_mm'))
                  {
                    $(document).one('click', cls);
                  }
                  else
                  {
                    closeMenu();
                  }
                });
              }
            });
          }
        }
      }

      function openMenu()
      {
        menu.addClass('active');
        menuActive = true;
      }

      function closeMenu()
      {
        menu.removeClass('active');
        menuActive = false;
      }

      })(jQuery)
  }

}
