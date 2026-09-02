ASHENDRAN & MIKSHA — WEB TRI-FOLD
Alba Designs

FILES
  index.html      page shell + all metadata
  styles.css      backdrop, fold mechanics, panel layout
  invite.js       type placement, fold sequence, countdown, .ics
  assets/         the six panels, cut from the print PDF at 300dpi
                  with the text stripped out, plus share.jpg and icons


BEFORE YOU GO LIVE  --  the one thing you must change
  index.html has a placeholder domain in five places:
      https://invite.albasdesigns.com/ashendran-miksha/
  It's in the canonical link, og:url, og:image, og:image:secure_url,
  twitter:image and the JSON-LD image field. Find and replace it with
  the real URL.

  Link previews will NOT work with relative image paths -- WhatsApp,
  Facebook, iMessage and Slack all need the full absolute URL. That's
  why share.jpg is spelt out in full rather than as assets/share.jpg.

  This page is currently set to
      <meta name="robots" content="noindex, nofollow">
  so search engines will not list it. Guests reach it by link only.
  The WhatsApp / iMessage / Facebook preview, the icon and the title
  all still work -- those come from the Open Graph tags, which have
  nothing to do with search indexing.

  If it should ever be searchable, swap that line for
      <meta name="robots" content="index, follow, max-image-preview:large">
  The JSON-LD Event block is left in place either way. It costs
  nothing while noindexed and is ready if that changes.

  share.jpg is 1200x630 and built from the ORIGINAL print artwork, so
  it carries the real The Seasons and Parisienne type, not the web
  substitutes. Re-scrape after any change:
  Facebook  developers.facebook.com/tools/debug/
  LinkedIn  www.linkedin.com/post-inspector/

HOW IT WORKS
  The six panels are the real artwork from the PDF -- florals, pillars,
  arch, deity art, Alba logo -- with every text block redacted out.
  All the wording is live HTML sitting on top, positioned from the
  original PDF point coordinates. So the copy is selectable, the
  phone numbers dial, the address opens Maps, and nothing is baked
  into an image.

  Opening follows the real letter fold: cover swings left, then the
  tucked panel unfolds right, revealing details | names | RSVP.

  The button under the card toggles both ways -- "Open the
  invitation" becomes "Fold it away", and the fold runs in reverse:
  the RSVP panel tucks back in, then the cover folds over it. Escape
  closes it too.

  The Front / Back toggle rotates the whole card 180 degrees. Closed,
  the reverse is the Alba credits panel, which is what you'd see if
  you turned the printed card over. Once it's open the toggle reads
  Inside / Outside and shows the full outer spread -- trishul,
  credits, cover -- in the same order as page 1 of the print PDF.


SMALL SCREENS
  Phones get the SAME fold, not a substitute. Earlier versions
  flattened it into a vertical stack below 840px, which meant most
  guests never saw the thing the site is built around.

  What changes is the framing, not the mechanism. One panel fills
  the width, so the guest is looking at the card up close: the
  cover swings away and reveals the centre panel at full size.
  They then swipe left and right to reach the date panel and the
  RSVP panel, with three dots under the card showing where they
  are. Drag follows the finger, resists at both ends, and snaps.

  Vertical scrolling still works -- the swipe only takes over once
  the gesture is clearly horizontal. Dragging across a phone number
  won't dial it; a drag suppresses the click underneath it.

  Everything else is identical: the flip works, the countdown
  works, the tools work. Panel size is min(88vw, available height),
  so it adapts from a small Android up to a tablet without any
  breakpoint tuning.

FONTS
  The print file uses The Seasons, JimmyScript and XBYas, which
  aren't web-licensed. Substituted with Cormorant Garamond,
  Sacramento, Parisienne and Lora from Google Fonts. Each line is
  auto-fitted to the exact printed width on load, so line lengths
  match the card even though the letterforms differ slightly.
  If you own webfont licences for the originals, drop the .woff2
  files in assets/ , add @font-face rules, and change the SERIF /
  SCRIPT constants at the top of invite.js.

PERSONALISING THE ADM LINE
  index.html?adm=The%20Naidoo%20Family
  fills the blank instead of the printed underline. No parameter,
  no change — it renders exactly as printed.

REMOVING THE EXTRAS
  The countdown, calendar, directions and call buttons live in
  <div class="tray"> in index.html. Delete that block and the
  card is a pure reproduction of the print piece. The side toggle
  is <div class="seg">.

DRIFTING PETALS
  Drawn (an inline SVG shape in styles.css), not photographed. A
  cut-out photo petal looked like a cut-out photo at 12px. 10 on
  desktop, 6 on mobile, each with its own randomised size, drift,
  spin and duration so no two follow the same path. Off entirely
  under prefers-reduced-motion. Count is set in petals() in
  invite.js; colour is the fill in the .petal background SVG.


BACKGROUND MUSIC
  assets/music.mp3 is an ORIGINAL 48-second loop written for this
  project: a bansuri-style flute lead over a harmonium pad with
  sparse plucked strings, in a Kalyan-leaning scale, with a plate
  reverb. Nothing is sampled, covered or licensed.

  This exists because film songs cannot be hosted here. A wedding
  invite gets forwarded hundreds of times and sits on a public
  URL -- a label's master on that URL is what draws a takedown,
  and it lands on the couple's page. If they want a specific film
  song, the clean routes are: link out to the official video;
  licence it (YRF Music, Saregama, T-Series or Sony Music India,
  allow weeks); or commission a flautist to record something
  original. A cover of a film melody still needs the composition
  rights -- only a new melody is free and clear.

  WHY IT'S WEB AUDIO, NOT THE <audio> TAG
  iOS ignores HTMLMediaElement.volume completely, so the fade-in
  was a silent no-op there, and a plain <audio> element is muted
  by the iPhone ringer switch. The track now decodes into an
  AudioContext and runs through a GainNode, which gives real
  volume control on every platform and is not tied to the ringer
  switch. The <audio> tag is kept only as a fallback for anything
  without Web Audio.

  IF IT STILL DOESN'T PLAY ON AN IPHONE, check the physical
  silent switch on the side of the phone first. That silences
  more than people expect.

  The .ogg is gone. Every current browser plays mp3 -- Firefox
  has since v22, in 2012 -- and Web Audio fetches the mp3
  directly, so the second file was 700KB of dead weight.

  Behaviour: starts on the same tap that opens the card, the only
  moment browsers allow audio to begin. Fades in over 2.6s to 34%
  volume. The Music button toggles it and the choice is remembered
  in localStorage. Set AUTOPLAY_ON_OPEN = false in invite.js for
  click-to-play only; VOL next to it is the ceiling.


CHROME
  Everything around the card is deliberately quiet: near-black warm
  backdrop with one light source, fine film grain, Jost for the UI
  and Cormorant for anything that speaks in the couple's voice.
  On a fine pointer the card takes a few degrees of parallax tilt.
  All of it is disabled under prefers-reduced-motion.

HOSTING
  Static. Drop the folder on any host. No build step.
