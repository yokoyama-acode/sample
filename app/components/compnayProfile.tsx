import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    // TableHead,
    TableRow,
    Paper,
    Typography,
  } from '@mui/material';
  
  export default function CompanyProfile() {
    return (
      <div className="container mx-auto py-8 px-4" id='company-profile'>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          会社概要
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>社名</TableCell>
                <TableCell>株式会社 A Code</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>設立</TableCell>
                <TableCell>2022年4月15日</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>所在地</TableCell>
                <TableCell>東京都神宮前6-23-4 桑野ビル2階</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>TEL</TableCell>
                <TableCell>080-6580-0179</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>代表取締役</TableCell>
                <TableCell>AAAAA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>社員数</TableCell>
                <TableCell>5名（業務委託含む）</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>資本金</TableCell>
                <TableCell>XXXXX万円(資本準備金含む)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>取引銀行</TableCell>
                <TableCell>みずほ銀行 AAA支店</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  