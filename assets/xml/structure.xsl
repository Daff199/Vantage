<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:variable name="name" select="//name" />
    <xsl:variable name="message" select="//message" />
    <xsl:variable name="email" select="//email" />

  <xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
      <table>
      <h2>Audio</h2>
        <xsl:for-each select="//file[../@name='audio']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      <h2>Video</h2>
        <xsl:for-each select="//file[../@name='video']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      <h2>Img</h2>
        <xsl:for-each select="//file[../@name='preview']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      <h2>Js</h2>
        <xsl:for-each select="//file[../@name='js']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      <h2>XML</h2>
        <xsl:for-each select="//file[../@name='xml']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      <h2>Style</h2>
        <xsl:for-each select="//file[../@name='style']">
          <tr>
            <td><xsl:value-of select="." /></td>
          </tr>
      </xsl:for-each>
      </table>
    </body>
  </html>
    
  </xsl:template>
</xsl:stylesheet>
