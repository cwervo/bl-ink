`<bl-ink>`

# Usage

Once you've imported the blink-element.js **at the bottom of your &lt;/body&gt;** you
should be able to use `bl-ink` just like this:

```
<bl-ink>bl-ink!</bl-ink>
```

Which results in this:

![bl-ink element recording](https://cdn.glitch.com/115d098d-9f74-45e3-ba78-fdfcec25a786%2Fblink-recording.gif?v=1570944788356)

# Customizing the element & animation

Customization is available via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

| property | default value |
-----------|----------------
| `--blink-animation-timing-function:` | `linear` |
| `--blink-animation-duration` | `0.5s` |
| `--blink-animation-iteration-count` | `infinite` |