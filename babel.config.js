module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  // plugin para lidar com async await 
  plugins: [
    '@babel/plugin-transform-runtime'    
  ]
}