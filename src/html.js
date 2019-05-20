import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" type="text/css" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/templete.css" />
        <link rel="stylesheet" type="text/css" href="css/skin/skin-1.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script src="/js/jquery.min.js"></script>
        <script src="/plugins/bootstrap/js/popper.min.js"></script>
        <script src="/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="/plugins/bootstrap-select/bootstrap-select.min.js"></script>
        <script src="/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js"></script>
        <script src="/plugins/magnific-popup/magnific-popup.js"></script>
        <script src="/plugins/counter/waypoints-min.js"></script>
        <script src="/plugins/counter/counterup.min.js"></script>
        <script src="/plugins/imagesloaded/imagesloaded.js"></script>
        <script src="/plugins/masonry/masonry-3.1.4.js"></script>
        <script src="/plugins/masonry/masonry.filter.js"></script>
        <script src="/plugins/owl-carousel/owl.carousel.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/js/dz.carousel.js"></script>
        <script src="/js/dz.ajax.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
