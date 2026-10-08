# backdropped

A vibrant event backdrop and signage website with a centred, full-screen process video hero.

## GitHub Pages deployment

The complete static website is in `docs/`. The GitHub Actions workflow deploys that directory when website changes are pushed to `main`, or when manually run from the Actions tab.

Enable GitHub Pages under **Settings → Pages → Source → GitHub Actions**. GitHub Free requires a public repository; private repositories require an eligible paid plan.

The root entry point and relative asset paths support this project site at `https://chyvors8.github.io/chyvors.github.io/` once Pages is enabled.

## Pages

- Home: `docs/index.html`
- What we do: `docs/what-we-do.html`
- Your Occasion: `docs/your-occasion.html`
- About Us: `docs/about-us.html`
- Let’s Talk: `docs/lets-talk.html`

Shared styles and navigation work at the project URL. The homepage service strip loops left to right, includes a pause control, and becomes static when reduced motion is requested.

## Content notes

The background film is an illustrative 20-second animated montage of AI-generated design, fabrication, installation and finished-backdrop scenes. It is not footage of an actual team or client project. The remaining event image is also an AI-generated concept.

The project enquiry form downloads a brief to the visitor's device. It does not send enquiries. Add real contact details before accepting customer enquiries.

## Occasion and About backgrounds

Built-in image generation created three illustrative scenes: a bright creative studio with sketches and lime/pink/orange/blue backdrop materials; a pastel celebration with arches, balloons, flowers and table styling; and a corporate activation with blue/lime panels, acrylic displays and illuminated signboard shapes. Prompts requested wide editorial photographs without people, logos or readable lettering.

Saved assets: `docs/assets/creative-studio.jpg`, `personal-event-poster.jpg`, `corporate-event-poster.jpg`, `personal-event-loop.mp4` and `corporate-event-loop.mp4` (all in `docs/assets/`). The two 12-second silent H.264 videos animate the generated event scenes with a seamless camera pan; they are illustrative loops, not live event footage. Category switching selects the relevant film. Pause preferences persist when switching; reduced motion uses the poster image.

## Service mockups

Each occasion service card includes its own AI-generated concept photograph. The 12 final optimised images and exact generation prompts are in `docs/assets/mockups/`; see `PROMPTS.md`. These illustrate possible designs rather than completed customer projects.
