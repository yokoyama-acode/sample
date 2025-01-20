'use client'

import { useState } from 'react'
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// カスタムスタイルのTextFieldを作成
const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    fontSize: '0.9rem',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#bdbdbd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ 
          fontWeight: 'bold',
          mb: 2,
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}>
          お問い合わせ
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          当ページと同じ３項目のお問い合わせフォーム（自動フォーム試用版）を簡単に使えるようにセットしています。
        </Typography>
        <Alert severity="warning" sx={{ mb: 4 }}>
          ※当ページ（contact.html）はフォームの見本ページです。実際の自動フォームには使いませんのでご注意下さい。
        </Alert>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <StyledTextField
          required
          fullWidth
          label="お名前"
          name="name"
          value={formData.name}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <StyledTextField
          required
          fullWidth
          label="メールアドレス"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <StyledTextField
          required
          fullWidth
          label="お問い合わせ詳細"
          name="message"
          multiline
          rows={6}
          value={formData.message}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '200px',
              backgroundColor: '#666',
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
          >
            内容を確認する
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

