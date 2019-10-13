import { Component, OnInit } from '@angular/core';

declare const jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-10-05T12:20:45.864Z",
      "created": "2019-10-05T12:20:45.864Z",
      "tags": ['mathematics', 'history', 'trending', 'rearfacts'],
      "author": "Vimal Manas",
      "category": "mathematics",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<p class=\"post_p\">Pythagoras theorem has a wide range of applications whether in trigonometry or any other mathematical concepts. It makes everything so easy that no one can resist falling in love with this theorem.  So let’s find out the origins of the Pythagoras theorem and understand some facts.</p><h4>How was this theorem discovered?</h4><p class=\"post_p\">The Pythagorean theorem takes its name from the ancient Greek mathematician Pythagoras. He perhaps was the first one to offer a proof of the theorem. But this special relationship between the sides of a right-angled triangle was probably known long before Pythagoras.</p><figure><img src=\"../../assets/images/post_image.jpg\" alt=\"\"><figcaption>Ancient traces</figcaption></figure><p class=\"post_p\">Ancient Babylonians master builders used the Pythagoras theorem in construction though it wasn’t really called Pythagoras theorem, but its principles were used. How do we know that?</p><p class=\"post_p\">Some ancient clay tablets from Babylonia indicate that the Babylonians in the second millennium B.C., 1000 years before Pythagoras, had rules for generating Pythagorean triples. They understood the relationship between the sides of a right-angled triangle. They could even solve hypotenuse of an isosceles right-angled triangle, in which they would come up with an approximation of the final value up to five decimal places. They did this because the lengths would often represent some multiple of the formula: 1^2 + 1^2 = (sqrt of two)^2.</p><h4>Was Pythagoras theorem used in ancient India?</h4><p class=\"post_p\">Indian mathematicians in the ancient times knew the Pythagorean theorem, they also used something called the Sulbasutras (of which the earliest date from (ceremonial axe)ca. 800-600 B.C.) that discuss the theorem in the context of strict requirements for the orientation, shape, and area of altars for religious purposes. The ancient Mayas used variations of Pythagorean triples in their ‘Long Count calendar’.</p><h4>About Pythagoras and the actual truth behind the Pythagoras theorem:</h4><p class=\"post_p\">Pythagoras was born in around 5000 BC, in an island called Samos in Greece. There is no much information about his youth though he did a lot of travelling to study is all that is known. Latter Pythagoras settled in Crotone(a city and comune in Calabria), where he started his cult or group called the Pythagoreans</p><p class=\"post_p\">The Pythagoreans loved maths so much that it was like a god to them, they pretty much worshiped maths. They believed that numbers ruled the universe with its mystical and spiritual qualities. Now, whether it was really Pythagoras or another person among the Pythagorean who discovered the theorem is unknown since it isn’t recorded in any of their writings. But when this theorem was discovered and proved the Pythagorean sacrifice huge number of bulls to their number gods. Well, they were quite serious about maths ;) </p><p class=\"post_p\">Indian mathematicians in the ancient times knew the Pythagorean theorem, they also used something called the SulbasuIt sure is amazing to know such a story behind such a simple proof. To know more of such amazing stories stay with us on Embibe. We not only make education fun but also help you score higher in your exams. So don’t forget to practice and take tests on Embibe, absolutely free!</p>",
      "title": "Origins of Pythagoras theorem",
      "shortLink": "origin-of-pythagoras-theorm",
      "blogImage": "post.jpg"
    },
    {
      "blogId": "2",
      "lastModified": "2019-10-05T12:20:45.864Z",
      "created": "2019-10-05T12:20:45.864Z",
      "tags": ['mathematics', 'history', 'trending', 'rearfacts'],
      "author": "Lenom Bistros",
      "category": "science",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h4>Some science facts about water:</h4><ul><li>Water is a polar inorganic compound that is at room temperature a tasteless and odorless liquid, nearly colorless with a hint of blue.</li><li>Density: 997 kg/m³</li><li>Boiling point: 212°F (100°C)</li><li>Molar mass: 18.01528 g/mol</li><li>Melting point: 32°F (0°C)</li><li>Formula: H2O</li><li>IUPAC ID: Water, Oxidant</li><li>Pure water (solely hydrogen and oxygen atoms) has a neutral pH of 7, which is neither acidic nor basic.</li><li>A gallon of water weighs 8.34 pounds; a cubic foot of water weighs 62.4 pounds.</li><li>A liter of water weighs 1 kilo; a cubic meter of water weighs 1 tonne.</li><li>An inch of water covering one acre (27,154 gallons) weighs 113 tons.</li><li>Water covers 70.9 percent of the planet’s surface.</li><li>The earth is a closed system, similar to a terrarium, meaning that it rarely loses or gains extra matter. The same water that existed on the earth millions of years ago is still present today. The water from your faucet could contain molecules that dinosaurs drank.</li><li>Water is composed of two elements, Hydrogen and Oxygen. 2 Hydrogen + 1 Oxygen = H2O.</li><li>Nearly 97% of the world’s water is salty or otherwise undrinkable. Another 2% is locked in ice caps and glaciers. That leaves just 1% for all of humanity’s needs — all its agricultural, residential, manufacturing, community, and personal needs.</li><li>Water regulates the Earth’s temperature. It also regulates the temperature of the human body, carries nutrients and oxygen to cells, cushions joints, protects organs and tissues, and removes wastes.</li><li>Water expands by 9% when it freezes. Frozen water (ice) is lighter than water, which is why ice floats in water.</li><li>Water is sticky. The molecules love to stick to things, especially each other. It’s what gives it such a large surface tension. It keeps you alive: it means water can pull blood up narrow vessels in the body, often against the force of gravity.</li><li>Water should be a gas at room temperature – all similar molecules, such as hydrogen sulfide (H2S) and ammonia (NH3), are gases. The stickiness of water molecules holds them together as a liquid.</li><li>Water is the second most common molecule in the universe. The most common is hydrogen gas, H2.</li><li>The biggest known cloud of water vapor was discovered by NASA scientists around a black hole 12 billion light years from Earth. There is 140 trillion times as much water in it as all the water in the world’s oceans.</li><li>All the water on Earth arrived in comets and asteroids. It happened between 4.5bn and 3.8bn years ago, a period called the Late Heavy Bombardment.</li><li>Everywhere there is liquid water on Earth, there is life. Even if that water is nearly boiling, or where the area is skin burningly acidic.</li><li>There is a hot ocean under the ice crust of Saturn’s moon Enceladus, probably sitting on a bed of rock. Since a hydro thermal vent at the bottom of one of the Earth’s oceans is thought to be the best candidate for where life started on our planet, astrobiologists think Enceladus is a good place to look for alien life.</li><li>Water expands when it freezes, unlike almost every other liquid. This has been crucial to life – lakes and rivers freeze from the top down, so even though the Earth has faced successive ice ages, there has always been liquid water for life to continue evolving.</li><li>Hot water freezes faster than cold water. This is known as the Mpemba Effect, and no-one knows why it happens.</li><li>There is ice on the poles of the moon, and on the poles of Mars and Mercury.</li><li>There are at least 16 different kinds, or “phases”, of ice. All of them have different crystal structures.</li><li>The Sun and other stars like it create the equivalent of 100 million times the water in the Amazon river every second.</li><li>Much more fresh water is stored under the ground in aquifers than on the earth’s surface.</li><li>There are about 1.5 billion cubic kilometers of water on Earth – that’s 1.5 billion trillion liters, or 800 trillion Olympic swimming pools.</li><li>If all that water was evenly spread over the Earth’s surface it would have a depth of 3,700 meters.</li><li>Of all the water on the earth, humans can use only about three tenths of a percent of this water. Such usable water is found in groundwater aquifers, rivers, and freshwater lakes.</li></ul>",
      "title": "The Scientific Facts About Water",
      "shortLink": "the-scientific-facts-about-water",
      "blogImage": "post2.jpg"
    },
    {
      "blogId": "3",
      "lastModified": "2019-10-08T12:20:45.864Z",
      "created": "2019-10-08T12:20:45.864Z",
      "tags": ['science', 'rearfacts'],
      "author": "Milin Karma",
      "category": "science",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<p class=\"post_p\">Species slowly and gradually adapt to changing conditions in the environment through biological modifications and natural selection. As a species appears and increases in population, it always contains some injurious element that will at some point, under some pressure, cause its demise and extinction.</p><p class=\"post_p\">This is the theory of natural selection first propounded by Charles Darwin in his publication of The Origin of the Species in 1859 and while controversial, mostly for theological reasons, it remains one of the most influential books in the history of natural sciences and his theory of natural selection is accepted by most biologists today.</p><p class=\"post_p\">New species have appeared both on land and in water, very slowly over time, one after another.  Evidence from fossils shows us too that species and groups of species gradually disappear, one after another, first from one spot and then from another, and finally from the world.</p><p class=\"post_p\">As a general matter, we needn’t be surprised or alarmed by extinction and rarity of species. <strong> It is as natural as the creation of new species.</strong> When a species does not adapt to changing conditions, say for example, changing temperatures or a predator’s toxin or a disease, it will die out and be replaced by a species which can survive in the changed conditions. </p><div class=\"post_quote\"><p class=\"post_p\">It is a principle of biology that each successive generation of a species is better adapted to the changing environment than its parent.</p></div><p class=\"post_p\">Anthropogenic causes can, from one vantage point, be considered a natural pressure causing the extinction of a species.  The concern today is the accelerated rate of extinction of a great number of species due to anthropogenic causes, the rate being somewhere between a thousand-and ten-thousand-fold what it would be absent the population explosion and subsequent development activities</p>",
      "title": "What are the reason behind extintion of animals?",
      "shortLink": "the-reason-behind-extinction-of-animals",
      "blogImage": "post3.jpg"
    },
    {
      "blogId": "4",
      "lastModified": "2019-10-13T12:20:45.864Z",
      "created": "2019-10-13T12:20:45.864Z",
      "tags": ['innovation'],
      "author": "M.S Mahur",
      "category": "innovation",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<p class=\"post_p\">Every educator wants to create an environment that will foster students' love of learning. Because the criteria are intangible, it's difficult to define or pinpoint exactly what they are. But one group is giving it a try.</p><p class=\"post_p\">Researchers at the Organization for Economic Cooperation and Development (OECD) launched the Innovative Learning Environments project to turn an academic lens on the project of identifying concrete traits that mark innovative learning environments. They sifted through and categorized the research on learning science, documented case studies, and compiled policy recommendations they hope will transform the current system.</p><p class=\"post_p\">Their book, <i>The Nature of Learning: Using Research to Inspire Practice</i> and the accompanying practitioner\’s guide, lay out the key principles for designing learning environments that will help students build skills useful in a world where jobs are increasingly information and knowledge-based. The principles are not job-specific – no one knows what the future economy will demand. Instead, the main goal is to develop self-directed learners, students with \“adaptive expertise.\”</p><p class=\"post_p\">To that end, these are their identified principles for innovative learning.</p><ol><li><strong><i>Learners have to be at the center of what happens in the classroom</i></strong> with activities focused on their cognition and growth. They have to actively engage in learning in order to become self-regulated learners who are able to control their emotions and motivations during the study process, set goals, and monitor their own learning process.</li><li><strong><i>Learning is a social practice and can’t happen alone.</i></strong> \“By our nature we are social beings and we learn by interacting,\” Jennifer Groff said. \“We learn by pushing and pulling on concepts with one another.\” Structured, collaborative group work can be good for all learners; it pushes people in different ways.</li><li><strong><i>Emotions are an integral part of learning.</i></strong> Students understand ideas better when there’s interplay between emotions, motivation and cognition, so positive beliefs about oneself are a core part of reaching a more profound understanding. The power of emotions and motivation in the classroom are well documented, but often overlooked because they are \“soft.\” Still most teachers know that if a student is upset about something that happened at home or in school, he won’t learn well. Similarly, keeping students motivated should be the starting point of learning. If students understand why it matters, learning becomes more important to them.</li><li><strong><i>Learners are different</i></strong> and innovative learning environments reflect the various experiences and prior knowledge that each student brings to class. “You really want practices and processes that help teachers engage each student where they are,” said Groff. This principle is understood by every frustrated educator teaching to a “middle” that doesn’t exist.</li><li><strong><i>Students need to be stretched, but not too much.</i></strong>\“It\’s really critical to find that student\’s sweet spot,\” Groff Said. Educators should try to prevent both coasting and overloading. Students need to experience both academic success and the challenge of discovery. In a diverse classroom group work can help achieve this as students at different levels help one another.</li><li><strong><i>Assessment should be for learning, not of learning.</i></strong> Assessments are important, but only to gauge how to structure the next lesson for maximum effectiveness. It should be meaningful, substantial, and shape the learning environment itself. \“Good teachers do this informally most of the time,\” Groff said. \“But when it\’s done well and more formally it\’s a whole structure and methodology where you collect feedback on the learning pathway and it drives the next step that you take.\”</li><li><strong><i>Learning needs to be connected across disciplines</i></strong> and reach out into the real world. Learning can’t be meaningful if students don’t understand why the knowledge will be useful to them, how it can be applied in life. Understanding the connections between subjects and ideas is essential for the ability to transfer skills and adapt. \“We can’t just have things remain in silos that never interact,\” Groff said.</li></ol>",
      "title": "7 Essential Principles of Innovative Learning",
      "shortLink": "7-essential-principals-of-innovative-learning",
      "blogImage": "post4.jpg"
    },
    {
      "blogId": "5",
      "lastModified": "2019-10-12T12:20:45.864Z",
      "created": "2019-10-12T12:20:45.864Z",
      "tags": ['creativity'],
      "author": "B V Dhillon",
      "category": "creativity",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<p class=\"post_p\">This page pulls together my most essential information about creativity. I\’ll share how creativity works, how to find your hidden creative genius, and how to create meaningful work by learning how to make creative thinking a habit. I\’ve tried to present the basics of everything you need to know to start mastering creativity, even if you don\’t have much time.</p><p class=\"post_p\">At the end of this page, you’ll find a complete list of all the articles I have written on creativity.</p><h4>What is Creativity?</h4><p class=\"post_p\">Let's define creativity.</p><p class=\"post_p\">The creative process is the act of making new connections between old ideas or recognizing relationships between concepts. Creative thinking is not about generating something new from a blank slate, but rather about taking what is already present and combining those bits and pieces in a way that has not been done previously.<p class=\"post_p\">While being creative isn't easy, nearly all great ideas follow a similar creative process. In 1940, an advertising executive named James Webb Young published a short guide titled, A Technique for Producing Ideas.</p><p class=\"post_p\">Young believed the process of creative connection always occurred in five steps.</p><h4>The Creative Process</h4><ol><li><strong>Gather new material. </strong>At first, you learn. During this stage you focus on 1) learning specific material directly related to your task and 2) learning general material by becoming fascinated with a wide range of concepts.</li><li><strong>Thoroughly work over the materials in your mind. </strong> During this stage, you examine what you have learned by looking at the facts from different angles and experimenting with fitting various ideas together.</li><li><strong>Step away from the problem.</strong>Next, you put the problem completely out of your mind and go do something else that excites you and energizes you.</li><li><strong>Let your idea return to you.</strong> At some point, but only after you have stopped thinking about it, your idea will come back to you with a flash of insight and renewed energy.</li><li><strong>Shape and develop your idea based on feedback.</strong> For any idea to succeed, you must release it out into the world, submit it to criticism, and adapt it as needed.</li></ol>",
      "title": "How to Unlock Your Hidden Creative Genius",
      "shortLink": "how-to-unlock-your-hidden-creative-genius",
      "blogImage": "post5.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
    (($) => {
      initHomeSlider();
      initVideo();
      initTopSlider();
      initVidSlider();
      initGrid();

      /*
      1. Init Home Slider
      */

      function initHomeSlider() {
        if ($('.home_slider').length) {
          const homeSlider = $('.home_slider');
          homeSlider.owlCarousel(
            {
              items: 1,
              autoplay: false,
              loop: true,
              smartSpeed: 1200,
              dots: true,
              dotsContainer: '.custom_dots_home_slider',
              nav: false
            });

          if ($('.home_slider_next').length) {
            $('.home_slider_next').on('click', () => {
              homeSlider.trigger('next.owl.carousel');
            });
          }

          if ($('.custom_prev_home_slider').length) {
            $('.custom_prev_home_slider').on('click', () => {
              homeSlider.trigger('prev.owl.carousel');
            });
          }

          if ($('.custom_next_home_slider').length) {
            $('.custom_next_home_slider').on('click', () => {
              homeSlider.trigger('next.owl.carousel');
            });
          }

          /*Custom dots events */
          if ($('.custom_dot_home_slider').length) {
            $('.custom_dot_home_slider').on('click', (ev) => {
              const dot = $(ev.target);
              $('.custom_dot_home_slider').removeClass('active');
              dot.addClass('active');
              homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          }

          /*Change active class for dots when slide changes by nav or touch */
          homeSlider.on('changed.owl.carousel', (event) => {
            $('.custom_dot_home_slider').removeClass('active');
            $('.custom_dots_home_slider li').eq(event.page.index).addClass('active');
          });
        }
      }

      /*
      2. Init Video
      */

      function initVideo() {
        if ($('#P1').length) {
          $('#P1').YTPlayer();
          if ($('.video_container').length) {
            const videos = $('.video_container');
            videos.each(() => {
              const video = $(this);
              video.on('click', () => {
                videos.removeClass('active');
                video.addClass('active');
              });
            });
          }
        }
      }

      /*
      3. Init Top Slider
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
      4. Init Vid Slider
      */

      function initVidSlider() {
        if ($('.sidebar_slider_vid').length) {
          const vidSlider = $('.sidebar_slider_vid');
          vidSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            smartSpeed: 1200,
            dots: true,
            dotsContainer: '.custom_dots_vid',
            nav: false
          });

          if ($('.custom_prev_vid').length) {
            $('.custom_prev_vid').on('click', () => {
              vidSlider.trigger('prev.owl.carousel');
            });
          }

          if ($('.custom_next_vid').length) {
            $('.custom_next_vid').on('click', () => {
              vidSlider.trigger('next.owl.carousel');
            });
          }

          /*Custom dots events */
          if ($('.custom_dot_vid').length) {
            $('.custom_dot_vid').on('click', (ev) => {
              const dot = $(ev.target);
              $('.custom_dot_vid').removeClass('active');
              dot.addClass('active');
              vidSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          }

          /*Change active class for dots when slide changes by nav or touch */
          vidSlider.on('changed.owl.carousel', (event) => {
            $('.custom_dot_vid').removeClass('active');
            $('.custom_dots_vid li').eq(event.page.index).addClass('active');
          });
        }
      }

      /*
      9. Init Grid
      */

      function initGrid() {
        setTimeout(() => {
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.card_default',
            gutter: 30
          });
        }, 500);
      }

      $(window).scrollTop(0);
    })(jQuery);
  }

}
