import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary: '#FF0000',
    secondary: '#CC0000',
    third: '#3B4CCA',
    fourth: '#FFDE00',
    fith: '#B3A125',
    mainBg: '#f0f0f0',
    secondBg: '#FFFFFF',
    contrastText: '#FFFFFF',
    wrong: '#FF5722',
    success: '#4CAF50'
  },
  borderRadius: '10px'
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
