import '../styles/globals.css'

export function reportWebVitals(metric) {
  
  if (metric.label === 'web-vital') {
    console.log("web-vital")
    console.log(metric)
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
