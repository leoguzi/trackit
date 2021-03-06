const { createGlobalStyle } = require('styled-components');

const colors = {
  color0: '#D6D6D6', // lightgray
  color1: '#86CCFF', // lightblue
  color2: '#52B6FF', // blue
  color3: '#126BA5', // darkblue
  color4: '#FFFFFF', // white
  color6: '#666666', // darkgray
  color7: '#8FC549', // green
  color8: '#BA0F30', // red
};

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	background-color: ${colors.color4};
	line-height: 1;
    font-family: 'Lexend Deca', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    box-sizing: border-box;
	font-family: 'Cuprum', sans-serif;
}
strong{
	font-weight: bold;
}
a{
	text-decoration: none;
}
`;

export { GlobalStyle, colors };
