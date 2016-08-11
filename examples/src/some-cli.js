/* eslint-disable */

const { stdin } = process;

console.log(`Your input arguments: ${process.argv.slice(2).join(', ') || 'None'}`);

stdin.setEncoding('utf8');

let data = '';
stdin.on('readable', () => {
  const chunk = process.stdin.read();

  // Apparently no piped input
  if (chunk == null && !data) {
    console.log('No stdin input received');
    process.exit(3);
  }

  if (chunk != null) {
    data += chunk.toString();
  }
});

stdin.on('end', () => {
  if (data !== '') {
    console.log('---');
    console.log('Input data:');
    console.log(data);

    // Exit codes will be received by the shell
    process.exit(2);
  }
});

