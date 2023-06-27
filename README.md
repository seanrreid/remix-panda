# Remix Panda!

-   A [Remix](https://remix.run/docs) x [Pando Design System](https://design.pluralsight.com/) project.

This was originally done with [Astro](https://astro.build), but didn't work out so well.

As a result, the artist formerly known as "Astronaut Panda" is now "DJ PandaMix."

Deployed on Netlify: [Panda Remix](https://panda-remix.netlify.app/)

**NOTE:** I know the system is called "PandO" but I got "Panda" stuck in my head, so this whole thing is just a silly reference to pandas.
Admittedly, giant bears are kinda rad, and red pandas are adorable, sooooo, there was no way I was going to change my mind once I started looking up Panda Astronaut and Panda DJ graphics.

## Development

This repo is me playing around with some of the options from the Pando Design System.

It makes use of some of their [Headless Styles](https://design.pluralsight.com/docs/learn/get-started/installation/add-to-website#diving-deeper-with-headless-styles), as well as the [Typography](https://design.pluralsight.com/docs/learn/get-started/installation/add-to-website#step-2-add-the-normalize-reset).

## Overall Thoughts

Overall, the concept of "headless" styles is really slick. It's probably my favorite part of Pando. I didn't bring in a UI library for this, but it was nice to know that I _could_.

The concept gets at a common painpoint I've run into with Design System adoption. Notably, this approach helps answer the question: "Why do we need a design system if we're already using [Tailwind, Chakra UI, Material UI, etc...]?"

![Why Not Both?](https://github.com/seanrreid/remix-panda/blob/main/public/why-not-both-why-not.gif)

It also feels very "developer friendly." Other than some import issues with Astro (which I suspect are more due to how Astro parses React than anything specific to Pando), it was a straightforward process. The types are clean, and extending the base into your own UI was dead simple.

## Wishlist

Here are some things I found myself reaching for that would be interesting to see added to future Pando releases:

### Typography

1. The ability to define a Typographic Scale
    - There are some great defaults in the `Normalize` and `Typography` styles delivered by Pando. However, the ability to set a global Typographic Scale would be fantastic.
    - Applying the styling to the semantic elements, `h1-h6`, `p`, etc... is great! I always prefer that to applying a variety of classes to other elements.
    - To that end, having the ability to apply a scale (potentially via a theme option?) that would override the defaults, or _as_ the defaults, would be a huge timesaver.
2. A "base" layout that improves content readability.
    - As an example; Tailwind has a [`prose` class](https://tailwindcss.com/docs/typography-plugin) that applies a variety of typographic defaults.
    - This `prose` class is designed to be a simple solution that makes text easier, and more accessible, to consume.
    - Notably, in addition to a pre-defined type scale, it also defines max-width in `ch` units to control line-length.
      Current WCAG Guidelines suggest [no more than 80 characters per line](<https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html#:~:text=Width%20is%20no%20more%20than%2080%20characters%20or%20glyphs%20(40%20if%20CJK).>).
    - The easier something is to implement, the more likely it will be implemented.
      Having a ready-made option that follows WCAG guidance, like the recommended line-length, will make the developers' job easier, and ensure content is accessible for all users.

### General styling

1. Leveraging the use of CSS Cascade Layers, the at-rule `@layer`.
    - Most browsers are support `@layer` per [CanIUse](https://caniuse.com/?search=%40layer).
    - This is a feature that Shopify appears to be shipping by default in [Hydrogen](https://github.com/Shopify/hydrogen), which provides a degree of validation for using it in a production environment.
    - There is a polyfill for older browsers, so it's something that could be progressively enhanced.
    - The general idea here would be to use layers as a way to replace/extend/enhance certain "layers" based on an individual's needs.
    - Layers wouldn't require a user to try to exclude options if they could just change what they need at each layer. This _should_ encapsulate changes enough that it doesn't have unintended side effects down the cascade.

### Maybes(?)

These items are things I'm on the fence about. Some of them are items that feel like I'm asking for another UI Kit, which runs counter to the point of headless styles.
However, I felt it was worth including them to see if there's a possible "third way" option. [insert Kobayashi Maru joke here]

-   The `Grid` component was a breeze to implement and extend. I tried the same thing with the `Flex` component, but found it wasn't exported.
    The ability to combine these two into a larger `Layout` component would be great, and prevent the uses cases where I most often reach for a UI Kit.
-   Adding an `Image` and/or `Figure` component that could remain relatively style-agnostic, but also provide things like `srcset`, `alt` text, or `figcaption` elements/attributes.
    These are things that can become a burden, and then dropped, particularly if you're integrating a Design System into something powered by a CMS.
    As I mentioned above, if there are tools that make something easier to implement then it's less likely for that thing to be overlooked.
-   I'm also wondering what, if anything, would be lost if the styles were switched from SCSS to CSS? Admittedly, this is a personal preference.
    In general I err in the direction of the language whenever possible and will irrationally put off using anything that requires an additional build step.
    This is absolutely a personal preference that is largely a result of teaching web development and trying to reinforce that students should focus on each language first, and the tooling second.

## Additional thoughts

Overall, I found Pando easy to get up and running. There are the noted areas where documentation is still being worked on. However, the system was straightforward enough that I could fill in the gaps by referencing
existing demos, or simply walking through the structure of the monorepo.

To circle back to accessibility, I think a lot of accessibility sadly falls by the wayside because it's seen as added work and not the default. I appreciate that accessibility is [a core principle of Pando](https://design.pluralsight.com/docs/learn/about-pando/a11y). Ideally this approach means that products built with Pando will be accessible, regardless of the personal approach of the person using the system.

Thanks for coming to my ~~TED Talk~~ README ~~stream of consciousness~~ file.
