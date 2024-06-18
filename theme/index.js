// theme/index.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                background: '#f5f5f5',
                color: '#333',
            },
        },
    },
});

export default theme;
