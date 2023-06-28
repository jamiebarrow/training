# Bootstrap

Welcome to my Bootstrap course.

Bootstrap is mainly a CSS framework on top of which provides a basis on top of which to build applications making use
of CSS, HTML and JavaScript.

It was originally created at [Twitter][2] and was known as Twitter Bootstrap for a while, but these days its more well
known as just Bootstrap.

It leveraged various techniques in the industry, like Eric Meyer's CSS reset, which gives a baselines across browsers
from which to apply styles to so that they are more consistent across various browsers.

Another technique is a grid system, which comes also from more traditional print media that you may see traditional
desktop designers making use of, in order to align items on a page in a more structured approach. I first made use of
the [960.gs][3] grid system which made use of a 12 column or 16 column layout. Having a grid system allows you to focus
on the layout by just thinking in terms of rows and columns, and also enabled features not really available yet in
browsers such as multi-column layouts.

These techniques allowed you to not really have to know about the various quirks of cross-browser compatibility for CSS
but Bootstrap also came across with pre-built components providing also some user interface and user experience
uniformity.

Components such as user friendly and interactive forms, with validation messages, different states for valid and invalid
data, alert messages, navigation bars, dropdown menus, pagination controls, and so on.

Additionally, when Bootstrap was introduced it was only starting to become popular to use tools such as [Less][4] and
[Sass][5] instead of using pure CSS with CSS overrides, but rather defining variables that can be built as part of a
compilation process, which allowed for easier customization, theming or white-labeling of websites. Tools would be added
onto this toolchain later such as [PostCSS][6] which could provide features such as expanding simple style rules to all
the variations of vendor specific platforms/browsers we would like to target, simplifying the code we would need to
write.

Some of the interactive components were also implemented as JavaScript plugins, whether independant or as jQuery
plugins. And finally, responsive design became a focus for providing multiple experiences from a single product, instead
of having to write different applications for each platform. A single website could be used for the mobile and desktop
version, and Bootstrap would have responsive design support as a foundation for developers to make use of.

All of this meant that developers could spend less time trying to learn CSS and creating a set of base components, and
focus on building the applications on top of the Bootstrap framework. This made the framework extremely popular, and it
was even quite usual to see many websites having the same look and feel, perhaps with slightly different colours, as
many websites were being built using the base template without much customization.

Today it is still popular, however with frameworks such as React and Angular, typically the jQuery based Bootstrap is
being replaced with more native browser features, or being re-implemented in framework specific paradigms. The Angular
based ng-boostrap framework is an example of one with re-implements the Bootstrap widgets from the ground up to allow
for better integration with the Angular framework.

[CSS Grid][9] as well as [Flexbox][10] are more modern browser features for layouts, and so for simple applications
Bootstrap could be unnecessary even for quite complicated responsive grid based layouts.

Browsers also have introduced more advanced components, such as datepickers and other form controls natively. Even a
[standard dialog component][7] is available for use.

So it may not always be necessary to use Bootstrap, but the ease of use of the framework and customization still make it
a popular tool in today's web development landscape.

# References

[1]: https://getbootstrap.com/
[2]: https://getbootstrap.com/docs/5.3/about/overview/
[3]: https://960.gs/
[4]: https://lesscss.org/
[5]: https://sass-lang.com/
[6]: https://postcss.org/
[7]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[8]: https://ng-bootstrap.github.io/
[9]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids