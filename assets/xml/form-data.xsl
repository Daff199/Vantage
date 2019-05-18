<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:variable name="name" select="//name" />
    <xsl:variable name="message" select="//message" />
    <xsl:variable name="email" select="//email" />

  <xsl:template match="/">
  <html>
    <head>
      <link rel="stylesheet" href="../../style/about.css"/> 
    </head>
    <body>
    <div>
      <h2>Contact us!!</h2>
      <form method="POST">
      <table>
      <tr>
        <td><label for="name">Name</label></td>
        <td><input name="name" placeholder="{$name}"/></td>
      </tr>
      <tr>
        <td><label for="name">Email</label></td>
        <td><input name="email" type="email" placeholder="{$email}"/></td>
      </tr>
      <tr>
        <td><label for="name">Message</label></td>
        <td><textarea name="message" placeholder="{$message}"/></td>
      </tr>
      </table>
    </form>
    </div>
    </body>
  </html>
    
  </xsl:template>
</xsl:stylesheet>
