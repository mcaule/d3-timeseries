import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/d3_timeseries.js',
  format: 'umd',
  moduleName: 'd3_timeseries',
  dest: 'dist/d3_timeseries.min.js',
  external: ['d3'],
  globals: {
    d3: 'd3'
  },

  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
    , uglify()
  ],
};
