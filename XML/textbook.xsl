<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/textbooks">
<html>
    <body>
    <h1>Debuging 06</h1>
        <table border="1">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Year</th>
                <th>ISBN</th>
                <th>Edition</th>
                <th>CoverType</th>
            </tr>
            <xsl:for-each select="book">
                <tr>
                    <td><xsl:value-of select="title"/></td>
                    <td><xsl:value-of select="author"/></td>
                    <td><xsl:value-of select="publisher"/></td>
                    <td><xsl:value-of select="year"/></td>
                    <td><xsl:value-of select="isbn"/></td>
                    <td><xsl:value-of select="edition"/></td>
                    <td><xsl:value-of select="covertype"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>