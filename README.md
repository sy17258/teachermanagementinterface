# 🎓 TeacherHub Management System

A comprehensive, modern teacher and student management platform built with Next.js, TypeScript, and Tailwind CSS. Features beautiful UI components from Aceternity UI for an enhanced user experience.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

## ✨ Features

### 📊 **Dashboard**
- Real-time statistics and analytics
- Activity feed and notifications
- Today's schedule overview
- Quick action buttons

### 👨‍🏫 **Teacher Management**
- Complete teacher profiles with contact information
- Multi-step teacher onboarding with Aceternity UI
- Qualification and certification tracking
- Availability and schedule management
- Status tracking (active, inactive, pending)

### 👨‍🎓 **Student Management**
- Student enrollment and profile management
- Parent/guardian contact information
- Course enrollment tracking
- Student status and grade management

### 📚 **Course Management**
- Course catalog with descriptions and pricing
- Teacher assignments and student enrollment
- Schedule management with time slots
- Course status tracking

### 📅 **Schedule Management**
- Interactive calendar view
- Class and event scheduling
- Room/location assignments
- Time slot management

### 💬 **Messaging System**
- Internal messaging between teachers, students, and admin
- File attachment support
- Read/unread status tracking
- Message search and filtering

### ⚙️ **Settings & Configuration**
- School information management
- Notification preferences
- Security settings with 2FA support
- Appearance customization
- Data management tools

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI + Custom Components
- **UI Enhancement:** Aceternity UI
- **Form Handling:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Package Manager:** PNPM

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **PNPM** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/teacherhub-management.git
   cd teacherhub-management
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📁 Project Structure

```
teacherhub-management/
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Dashboard page
│   ├── teachers/                # Teacher management
│   ├── students/                # Student management
│   ├── courses/                 # Course management
│   ├── schedule/                # Schedule management
│   ├── messages/                # Messaging system
│   ├── settings/                # Settings page
│   └── time-tracking/           # Time tracking
├── components/                   # React components
│   ├── aceternity-steps/        # Aceternity UI form steps
│   ├── layout/                  # Layout components
│   └── ui/                      # Reusable UI components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── types/                       # TypeScript type definitions
├── public/                      # Static assets
└── styles/                      # Additional styles
```

## 🎨 UI Components

The project uses a comprehensive set of UI components including:

- **Forms:** Multi-step forms with validation
- **Data Display:** Tables, cards, badges, avatars
- **Navigation:** Sidebar, breadcrumbs, pagination
- **Feedback:** Alerts, toasts, loading states
- **Overlays:** Modals, dropdowns, tooltips
- **Aceternity UI:** Enhanced animations and interactions

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# DATABASE_URL=your_database_url
# NEXTAUTH_SECRET=your_nextauth_secret
# NEXTAUTH_URL=http://localhost:3000
```

### Tailwind CSS

The project is configured with:
- Custom color palette
- Component-specific styles
- Responsive design utilities
- Dark mode support (ready for implementation)

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **Radix UI** for accessible component primitives
- **Aceternity UI** for beautiful component enhancements
- **Tailwind CSS** for the utility-first CSS framework

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact:

- **Email:** your-email@example.com
- **GitHub Issues:** [Create an issue](https://github.com/your-username/teacherhub-management/issues)

---

**Built with ❤️ for educational institutions worldwide**
