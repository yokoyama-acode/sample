'use client'
import { Container, Typography, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const MapContainer = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  marginBottom: '2rem',
  '& iframe': {
    border: 0,
    width: '100%',
    height: '100%'
  }
})

const StationInfo = styled(Typography)({
  marginBottom: '0.5rem',
  fontSize: '1rem',
  lineHeight: 1.8
})

export default function AccessSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 'normal',
          fontSize: { xs: '1.75rem', md: '2.125rem' }
        }}
      >
        Access
      </Typography>

      <MapContainer elevation={1}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.5751562041087!2d139.34778847676168!3d35.32833847247761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a3c4498b5655%3A0x4e6e9175754f9c82!2z44CSMjU0LTAwNDMg56We5aWI5bed55yM5bmz5aGX5biC57eR6LC355S677yW5LiB55uu77yT77yQ!5e0!3m2!1sja!2sjp!4v1705622567890!5m2!1sja!2sjp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          aria-label="Location map"
        />
      </MapContainer>

      <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: '1rem',
            lineHeight: 1.8
          }}
        >
          〒254-0043 神奈川県平塚市紅谷町6-30 第二古木ビル1階
        </Typography>

        <Box sx={{ mt: 3 }}>
          <StationInfo>
            渋谷駅、原宿駅より徒歩8分
          </StationInfo>
          <StationInfo>
            明治神宮前駅より徒歩5分
          </StationInfo>
        </Box>
      </Box>
    </Container>
  )
}
