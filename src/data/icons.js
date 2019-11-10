const standardViewbox = "0 0 24 24";

export default {
  settings: {
    viewbox: standardViewbox,
    html: `<path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z"/>`
  },
  close: {
    viewbox: standardViewbox,
    html: `<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>`
  },
  add: {
    viewbox: standardViewbox,
    html: `<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>`
  },
  home: {
    viewbox: standardViewbox,
    html: `<path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"/>`
  },
  users: {
    viewbox: standardViewbox,
    html: `<path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/>`
  },
  graph: {
    viewbox: standardViewbox,
    html: `<path d="M5 20v2h-2v-2h2zm2-2h-6v6h6v-6zm6-1v5h-2v-5h2zm2-2h-6v9h6v-9zm6-2v9h-2v-9h2zm2-2h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z"/>`
  },
  air: {
    viewbox: standardViewbox,
    html: `<path d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2"/>`
  },
  rail: {
    viewbox: `0 0 141.732 141.732`,
    html: `<path d="M101.734,59.837c0,3.005-2.433,5.439-5.439,5.439c-3.005,0-5.439-2.434-5.439-5.439c0-3.007,2.435-5.44,5.439-5.44   S101.734,56.831,101.734,59.837 M101.734,43.517h-27.2V16.319h27.2V43.517z M85.415,8.158c0,1.545-1.218,2.794-2.718,2.794h-21.76   h-0.038c-1.523,0-2.758-1.233-2.758-2.758c0-1.521,1.235-2.761,2.758-2.761c0.015,0,0.024,0.004,0.038,0.004V5.363h21.759h0.002   C84.197,5.363,85.415,6.613,85.415,8.158 M69.096,43.517h-27.2V16.319h27.202L69.096,43.517L69.096,43.517z M41.094,59.837   c0-3.007,2.436-5.44,5.439-5.44c3.007,0,5.443,2.433,5.443,5.44c0,3.005-2.436,5.439-5.443,5.439   C43.529,65.276,41.094,62.843,41.094,59.837 M53.287,87.035H90.03l6.455,11.177H46.834L53.287,87.035z M40.553,109.091h62.212   l6.28,10.881H34.27L40.553,109.091z M107.177,78.876V8.158c0-4.508-3.655-8.158-8.162-8.158h-0.002H44.618h-0.001   c-4.507,0-8.16,3.649-8.16,8.157v70.718c0,4.508,3.653,8.158,8.16,8.158h2.471L15.51,141.732h6.199l6.281-10.883h87.337   l6.281,10.883h6.199L96.228,87.035h2.789C103.521,87.035,107.177,83.384,107.177,78.876 M108.365,98.211l0.257,0.443v-0.443   H108.365z"/>`
  },
  sea: {
    viewbox: `0 0 612 612`,
    html: `	<path d="M313.49,306H68.373v-62.997c0-4.97,4.029-9,9-9H271.93c3.409,0,6.525,1.926,8.05,4.975L313.49,306z M176.368,144.008
		v-35.999h-62.997v35.999H176.368z M113.371,162.007v62.997h62.997v-62.997H113.371z M609.979,329.663l-44.802,81.248
		c-31.663,57.421-92.047,93.08-157.618,93.08H91.95c-19.368,0-36.563-12.394-42.688-30.769L0.469,326.845
		C-1.474,321.017,2.864,315,9.006,315h593.977C610.554,315,614.742,323.778,609.979,329.663z M152.987,392.375
		c0-9.644-7.816-17.46-17.459-17.46c-9.643,0-17.459,7.816-17.459,17.46c0,9.643,7.817,17.459,17.459,17.459
		C145.17,409.834,152.987,402.018,152.987,392.375z M224.984,392.375c0-9.644-7.817-17.46-17.46-17.46
		c-9.643,0-17.459,7.816-17.459,17.46c0,9.643,7.817,17.459,17.459,17.459C217.167,409.834,224.984,402.018,224.984,392.375z
		 M296.98,392.375c0-9.644-7.816-17.46-17.459-17.46c-9.643,0-17.459,7.816-17.459,17.46c0,9.643,7.817,17.459,17.459,17.459
		C289.164,409.834,296.98,402.018,296.98,392.375z"/>`
  },
  
}