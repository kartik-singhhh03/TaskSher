# TaskSher - AI-Powered Virtual Assistant

TaskSher is a comprehensive MERN stack application that automates recurring micro-tasks for solopreneurs, including email replies, newsletter generation, and Notion task logging.

## 🚀 Features

### Core Automations
- **Thank-you Email Generator**: Automatically send personalized thank-you emails
- **Newsletter Summary Generator**: Create weekly newsletter summaries from content
- **Notion Task Logger**: Convert emails into organized Notion tasks

### Payment Integration
- **Stripe**: Credit/Debit card payments
- **Razorpay**: UPI, Cards, Net Banking, Wallets (India)
- **PayPal**: Global payment processing
- **UPI**: Direct UPI payments

### User Experience
- **Dark/Light Theme**: Toggle between themes
- **Responsive Design**: Works on all devices
- **Real-time Notifications**: Toast notifications for user feedback
- **Comprehensive Settings**: Profile, automations, billing, security

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **React Query** for state management
- **React Router** for navigation

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Stripe, Razorpay, PayPal** for payments
- **Nodemailer** for emails
- **OpenAI** for AI features

### DevOps
- **Docker** for containerization
- **Docker Compose** for orchestration
- **Nginx** for reverse proxy
- **MongoDB** for database
- **Redis** for caching

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB
- Docker (for production)

### Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd tasksher
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
cd ..
```

4. **Environment Configuration**
```bash
cd server
cp .env.example .env
# Update .env with your configuration
```

5. **Start development servers**
```bash
# Frontend (runs on http://localhost:8080)
npm run dev

# Backend (runs on http://localhost:5000)
npm run server:dev
```

### Production Deployment

1. **Using Docker Compose**
```bash
cd server
chmod +x deploy.sh
./deploy.sh
```

2. **Manual Deployment**
```bash
# Build frontend
npm run build

# Start backend
cd server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/tasksher

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Payment Gateways
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# AI Services
OPENAI_API_KEY=sk-your-openai-api-key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## 🏗 Architecture

### Frontend Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ThemeToggle.tsx # Theme switching
│   └── PaymentModal.tsx # Payment processing
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── integrations/       # External service integrations
```

### Backend Structure
```
server/
├── models/             # MongoDB schemas
├── routes/             # API endpoints
├── middleware/         # Express middleware
├── services/           # Business logic
└── utils/              # Helper functions
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based auth
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Sanitize user inputs
- **CORS Protection**: Secure cross-origin requests
- **Helmet.js**: Security headers
- **Password Hashing**: bcrypt encryption
- **Account Lockout**: Prevent brute force attacks

## 💳 Payment Integration

### Stripe
- Credit/Debit card processing
- Subscription management
- Webhook handling
- PCI compliance

### Razorpay
- UPI payments
- Net banking
- Wallet integration
- Indian market focus

### PayPal
- Global payment processing
- PayPal account integration
- Subscription billing

### UPI
- Direct UPI ID payments
- Instant transfers
- Indian market

## 🚀 Deployment Options

### 1. Docker Compose (Recommended)
```bash
cd server
./deploy.sh
```

### 2. Cloud Platforms
- **Vercel**: Frontend deployment
- **Railway/Render**: Backend deployment
- **MongoDB Atlas**: Database hosting
- **Cloudflare**: CDN and DNS

### 3. VPS/Dedicated Server
- **Nginx**: Reverse proxy
- **PM2**: Process management
- **Let's Encrypt**: SSL certificates

## 📊 Monitoring & Analytics

- **Health Check Endpoints**: `/api/health`
- **Error Logging**: Comprehensive error tracking
- **Performance Metrics**: Response time monitoring
- **User Analytics**: Usage statistics

## 🧪 Testing

```bash
# Frontend tests
npm run test

# Backend tests
cd server
npm run test

# E2E tests
npm run test:e2e
```

## 📝 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Payments
- `POST /api/payments/stripe/create-payment-intent` - Create Stripe payment
- `POST /api/payments/razorpay/create-order` - Create Razorpay order
- `POST /api/payments/paypal/create-order` - Create PayPal order

### Automations
- `GET /api/automations` - List user automations
- `POST /api/automations` - Create automation
- `PUT /api/automations/:id` - Update automation
- `DELETE /api/automations/:id` - Delete automation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.tasksher.com](https://docs.tasksher.com)
- **Email**: support@tasksher.com
- **Discord**: [TaskSher Community](https://discord.gg/tasksher)

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced AI features
- [ ] More integrations (Slack, Discord)
- [ ] Team collaboration features
- [ ] Advanced analytics dashboard
- [ ] API marketplace

---

Built with ❤️ by the TaskSher team