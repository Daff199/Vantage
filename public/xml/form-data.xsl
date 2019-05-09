<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <xsl:variable name="email" select="//email"/>
    <xsl:variable name="name" select="//name"/>
    <xsl:variable name="message" select="//message"/>
    <html>
      <body>
        <h1>This site is working temporarly</h1>
        <form method="POST">
          <table>
            <tr><td>Email:</td><td><input type="text" name="email" value="{$email}"></input></td></tr>
            <tr><td>Name:</td><td><input type="text" name="name" value="{$name}"/></td></tr>
            <tr><td>Mobile:</td><td><input type="text" name="mobile" value="{$message}"/></td></tr>
            <tr><td></td><td><input type="submit" value="Submit"/></td></tr>
        </table>
      </form>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
