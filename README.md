# 🎓 TeacherHub Management Interface

A comprehensive, modern teacher and student management platform built with Next.js, TypeScript, and Tailwind CSS. Features beautiful UI components from Aceternity UI for an enhanced user experience with stunning animations and interactive elements.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Aceternity UI](https://img.shields.io/badge/Aceternity%20UI-Enhanced-6366F1?logoColor=white)
![PNPM](https://img.shields.io/badge/PNPM-Package%20Manager-F69220?logo=pnpm&logoColor=white)

## ✨ Features

### 🏠 **Dashboard**
- **Real-time Analytics**: Live statistics for teachers, students, courses, and revenue
- **Activity Feed**: Recent activities and notifications
- **Today's Schedule**: Quick overview of scheduled classes and events
- **Quick Actions**: Fast access to common tasks
- **Performance Metrics**: Attendance rates and engagement analytics

### 👨‍🏫 **Teacher Management**
- **Comprehensive Profiles**: Complete teacher information with contact details
- **Multi-Step Onboarding**: Beautiful Aceternity UI-powered teacher registration
- **Qualification Tracking**: Degrees, certifications, and teaching credentials
- **Availability Management**: Schedule preferences and time slot configuration
- **Status Management**: Active, inactive, pending status tracking
- **Salary & Contract**: Employment details and compensation management

### 👨‍🎓 **Student Management**
- **Student Profiles**: Detailed student information and academic records
- **Enrollment Tracking**: Course registration and progress monitoring
- **Parent/Guardian Information**: Emergency contacts and communication
- **Grade Management**: Academic level and performance tracking
- **Course History**: Complete enrollment and completion records

### 📚 **Course Management**
- **Course Catalog**: Comprehensive course listings with descriptions
- **Pricing Management**: Flexible pricing models and payment tracking
- **Teacher Assignments**: Link courses with qualified instructors
- **Student Capacity**: Maximum enrollment and current registration numbers
- **Schedule Integration**: Automatic calendar and time slot management
- **Course Status**: Active, inactive, completed course tracking

### 📅 **Schedule Management**
- **Interactive Calendar**: Visual schedule with drag-and-drop functionality
- **Class Scheduling**: Easy class and event creation
- **Room Management**: Location and resource assignments
- **Time Slot Control**: Flexible time blocks and recurring events
- **Conflict Detection**: Automatic scheduling conflict prevention
- **Multi-view Support**: Daily, weekly, monthly calendar views

### 💬 **Messaging System**
- **Internal Communication**: Secure messaging between all user types
- **File Attachments**: Document and media sharing capabilities
- **Message Threading**: Organized conversation history
- **Read Receipts**: Message delivery and read status
- **Search & Filter**: Advanced message search and categorization
- **Notification Management**: Real-time alerts and email notifications

### ⏰ **Time Tracking**
- **Clock In/Out**: Digital time tracking for staff
- **Work Hours Monitoring**: Daily and weekly hour calculations
- **Break Management**: Track breaks and overtime
- **Reporting**: Generate timesheets and attendance reports
- **Status Tracking**: Real-time work status indicators

### ⚙️ **Settings & Administration**
- **School Configuration**: Institution details and branding
- **User Permissions**: Role-based access control
- **Notification Preferences**: Customizable alert settings
- **Security Features**: Two-factor authentication and session management
- **Data Export/Import**: Backup and migration tools
- **Theme Customization**: Light/dark mode and color schemes

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15.2.4** - React framework with App Router for optimal performance
- **React 19** - Latest React with concurrent features and improved hooks
- **TypeScript 5** - Type-safe development with advanced type features

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Aceternity UI** - Premium animated components for enhanced UX
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful, customizable icon library
- **Framer Motion** - Production-ready motion library for animations

### **Forms & Validation**
- **React Hook Form 7.54.1** - Performant forms with minimal re-renders
- **Zod 3.24.1** - TypeScript-first schema validation
- **Custom Validation** - Multi-step form validation logic

### **Development Tools**
- **PNPM** - Fast, disk space efficient package manager
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### **Component Libraries**
- **@radix-ui/react-accordion** - Collapsible content sections
- **@radix-ui/react-dialog** - Modal dialogs and overlays
- **@radix-ui/react-dropdown-menu** - Contextual menus
- **@radix-ui/react-select** - Accessible select components
- **@radix-ui/react-tabs** - Tab navigation components
- **@radix-ui/react-toast** - Notification system
- **And 20+ more Radix UI components**

### **Utilities & Helpers**
- **clsx** - Conditional className utility
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Tailwind class merging utility
- **date-fns** - Modern JavaScript date utility library

## 🚀 Quick Deploy

### Deploy to Vercel (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsy17258%2Fteachermanagementinterface.git&project-name=teacher-management-interface&repository-name=teacher-management-interface)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.17.0 or higher) - [Download here](https://nodejs.org/)
- **PNPM** (v8.0.0 or higher) - Recommended package manager
  ```bash
  npm install -g pnpm
  ```
- **Git** - For version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sy17258/Teacher-Management-Interface.git
   cd Teacher-Management-Interface
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on http://localhost:3000 |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server (after build) |
| `pnpm lint` | Run ESLint to check code quality |

### Environment Setup

Create a `.env.local` file in the root directory for environment variables:

```env
# Database Configuration (when implementing backend)
# DATABASE_URL=your_database_connection_string

# Authentication (when implementing auth)
# NEXTAUTH_SECRET=your_nextauth_secret
# NEXTAUTH_URL=http://localhost:3000

# Email Configuration (for notifications)
# SMTP_HOST=your_smtp_host
# SMTP_PORT=587
# SMTP_USER=your_email@domain.com
# SMTP_PASS=your_email_password

# File Upload (when implementing file storage)
# UPLOAD_MAX_SIZE=10485760
# ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf,doc,docx
```

## 📁 Project Structure

```
Teacher-Management-Interface/
├── 📁 app/                          # Next.js App Router pages
│   ├── 🎨 globals.css              # Global styles and Tailwind imports
│   ├── ⚛️ layout.tsx               # Root layout with sidebar and header
│   ├── 🏠 page.tsx                 # Dashboard page with analytics
│   ├── 📁 courses/                 # Course management pages
│   │   ├── 🔄 loading.tsx          # Loading UI for courses
│   │   └── 📚 page.tsx             # Main courses page
│   ├── 📁 messages/                # Messaging system
│   │   ├── 🔄 loading.tsx          # Loading UI for messages
│   │   └── 💬 page.tsx             # Messages interface
│   ├── 📁 schedule/                # Schedule management
│   │   └── 📅 page.tsx             # Calendar and schedule view
│   ├── 📁 settings/                # Application settings
│   │   └── ⚙️ page.tsx             # Settings configuration
│   ├── 📁 students/                # Student management
│   │   ├── 🔄 loading.tsx          # Loading UI for students
│   │   └── 👨‍🎓 page.tsx             # Student directory and profiles
│   ├── 📁 teachers/                # Teacher management
│   │   ├── 🔄 loading.tsx          # Loading UI for teachers
│   │   └── 👨‍🏫 page.tsx             # Teacher directory and profiles
│   └── 📁 time-tracking/           # Time tracking system
│       └── ⏰ page.tsx             # Time tracking interface
├── 📁 components/                   # Reusable React components
│   ├── 📁 aceternity-steps/        # Aceternity UI form steps
│   │   ├── ✨ availability-step.tsx    # Availability form step
│   │   ├── ✨ contact-info-step.tsx    # Contact information step
│   │   ├── ✨ emergency-contact-step.tsx # Emergency contact step
│   │   ├── ✨ personal-info-step.tsx   # Personal information step
│   │   ├── ✨ qualifications-step.tsx  # Qualifications form step
│   │   └── ✨ review-step.tsx          # Final review step
│   ├── 🎨 aceternity-teacher-form.tsx  # Main Aceternity form component
│   ├── 📝 add-teacher-form.tsx         # Teacher registration form
│   ├── 📁 layout/                      # Layout components
│   │   ├── 🎯 header.tsx              # Top navigation header
│   │   └── 📊 sidebar.tsx             # Side navigation menu
│   ├── 🎓 qualifications-section.tsx   # Qualifications display
│   ├── 📅 schedule-section.tsx         # Schedule display component
│   ├── 👤 teacher-profile-header.tsx   # Teacher profile header
│   ├── 🌙 theme-provider.tsx           # Theme context provider
│   └── 📁 ui/                          # Reusable UI components
│       ├── 🎨 accordion.tsx            # Collapsible sections
│       ├── ⚠️ alert-dialog.tsx         # Alert modal dialogs
│       ├── 👤 avatar.tsx               # User avatar component
│       ├── 🏷️ badge.tsx                # Status and category badges
│       ├── 🔘 button.tsx               # Interactive buttons
│       ├── 📅 calendar.tsx             # Date picker calendar
│       ├── 🎴 card.tsx                 # Content containers
│       ├── ✅ checkbox.tsx             # Form checkboxes
│       ├── 💬 dialog.tsx               # Modal dialogs
│       ├── 📊 dropdown-menu.tsx        # Context menus
│       ├── 📝 form.tsx                 # Form components
│       ├── 📥 input.tsx                # Text input fields
│       ├── 🏷️ label.tsx               # Form labels
│       ├── 📊 progress.tsx             # Progress indicators
│       ├── 🔘 radio-group.tsx          # Radio button groups
│       ├── 📜 scroll-area.tsx          # Scrollable containers
│       ├── 📋 select.tsx               # Dropdown selections
│       ├── 🎚️ slider.tsx               # Range sliders
│       ├── 🔄 switch.tsx               # Toggle switches
│       ├── 📊 table.tsx                # Data tables
│       ├── 📑 tabs.tsx                 # Tab navigation
│       ├── 📝 textarea.tsx             # Multi-line text input
│       ├── 🔔 toast.tsx                # Notification toasts
│       └── 💡 tooltip.tsx              # Hover information
├── 📁 hooks/                       # Custom React hooks
│   ├── 📱 use-mobile.tsx           # Mobile device detection
│   └── 🔔 use-toast.ts             # Toast notification hook
├── 📁 lib/                         # Utility functions and helpers
│   ├── 🛠️ utils.ts                 # General utility functions
│   └── ✅ validation.ts            # Form validation schemas
├── 📁 public/                      # Static assets
│   ├── 🖼️ placeholder-logo.png      # Default logo images
│   ├── 🖼️ placeholder-logo.svg      # Vector logo
│   ├── 👤 placeholder-user.jpg      # Default user avatar
│   └── 🖼️ placeholder.jpg           # General placeholder image
├── 📁 styles/                      # Additional stylesheets
│   └── 🎨 globals.css              # Global CSS styles
├── 📁 types/                       # TypeScript type definitions
│   ├── 📊 index.ts                 # Main type exports
│   ├── 📝 teacher-form.ts          # Teacher form interfaces
│   └── 👨‍🏫 teacher.ts               # Teacher-related types
├── ⚙️ components.json              # Shadcn/UI configuration
├── ⚙️ next.config.mjs              # Next.js configuration
├── 📦 package.json                 # Project dependencies and scripts
├── 📦 pnpm-lock.yaml               # PNPM lockfile
├── ⚙️ postcss.config.mjs           # PostCSS configuration
├── 🎨 tailwind.config.ts           # Tailwind CSS configuration
└── ⚙️ tsconfig.json                # TypeScript configuration
```

### Key Directories Explained

- **`app/`** - Next.js 13+ App Router pages with file-based routing
- **`components/aceternity-steps/`** - Beautiful animated form steps using Aceternity UI
- **`components/ui/`** - Reusable, accessible UI components based on Radix UI
- **`types/`** - TypeScript interfaces for type safety throughout the application
- **`lib/`** - Utility functions for common operations and validations

## 🎨 UI Components & Design System

### **Aceternity UI Integration**
The project leverages Aceternity UI for enhanced user experience with:
- **Animated Form Steps** - Smooth transitions between form sections
- **Background Effects** - Subtle animations and visual enhancements
- **Interactive Elements** - Hover effects and micro-interactions
- **Modern Aesthetics** - Contemporary design patterns

### **Component Categories**

#### **📝 Form Components**
- Multi-step forms with progress tracking
- Real-time validation with error messaging
- File upload with drag-and-drop support
- Auto-save and form persistence

#### **📊 Data Display**
- Responsive data tables with sorting and filtering
- Interactive cards with hover effects
- Status badges and progress indicators
- Avatar components with fallbacks

#### **🧭 Navigation**
- Collapsible sidebar with search functionality
- Breadcrumb navigation for deep pages
- Tab navigation for content organization
- Floating action buttons for quick access

#### **🔔 Feedback**
- Toast notifications for user actions
- Loading states and skeleton screens
- Error boundaries and fallback UI
- Success confirmations and alerts

#### **🎯 Interactive Elements**
- Modal dialogs for detailed views
- Dropdown menus with keyboard navigation
- Tooltips for additional information
- Drawer panels for secondary content

### **Design Principles**
- **Accessibility First** - WCAG 2.1 AA compliant components
- **Mobile Responsive** - Optimized for all screen sizes
- **Performance Focused** - Lazy loading and code splitting
- **Consistent Spacing** - Systematic spacing using Tailwind utilities
- **Color Harmony** - Thoughtful color palette with proper contrast ratios

## 🔧 Configuration & Customization

### **Tailwind CSS Setup**
The project includes a comprehensive Tailwind configuration:

```typescript
// tailwind.config.ts
{
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        // ... more custom colors
      },
      animation: {
        // Custom animations for Aceternity UI
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      }
    }
  }
}
```

### **Component Customization**
Components are built with variant support using `class-variance-authority`:

```typescript
const buttonVariants = cva("base-button-styles", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      outline: "border border-input bg-background",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
    }
  }
})
```

### **Theme Configuration**
Dark mode ready with CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... more CSS variables */
}

[data-theme="dark"] {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode overrides */
}
```

## � Deployment

### **Vercel (Recommended)**
The easiest way to deploy your TeacherHub application:

1. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Configure build settings (auto-detected)

2. **Build Configuration**
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": ".next",
     "framework": "nextjs"
   }
   ```

3. **Environment Variables**
   Set up your environment variables in Vercel dashboard

### **Other Deployment Options**

#### **Netlify**
```bash
# Build command
pnpm build && pnpm export

# Publish directory
out
```

#### **Docker**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile
EXPOSE 3000
CMD ["pnpm", "start"]
```

#### **Traditional Hosting**
```bash
# Build for static export (if needed)
pnpm build
pnpm export

# Upload the 'out' directory to your hosting provider
```

## 🤝 Contributing

We welcome contributions to the TeacherHub Management Interface! Here's how you can help:

### **Getting Started**
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/your-username/Teacher-Management-Interface.git
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

### **Development Guidelines**

#### **Code Style**
- Follow the existing TypeScript and React patterns
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Ensure all components are properly typed

#### **Component Development**
- Create reusable components in `components/ui/`
- Use Aceternity UI patterns for enhanced components
- Follow the established naming conventions
- Add proper TypeScript interfaces

#### **Testing**
- Test your changes thoroughly in development
- Ensure responsive design works across devices
- Check accessibility with screen readers
- Verify TypeScript compilation passes

### **Pull Request Process**
1. **Update documentation** if needed
2. **Ensure your code passes linting**
   ```bash
   pnpm lint
   ```
3. **Build the project successfully**
   ```bash
   pnpm build
   ```
4. **Create a detailed pull request** with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing steps performed

### **Areas for Contribution**
- 🐛 **Bug Fixes** - Report and fix issues
- ✨ **New Features** - Add new functionality
- 🎨 **UI Improvements** - Enhance user experience
- 📚 **Documentation** - Improve guides and examples
- 🔧 **Performance** - Optimize code and loading times
- ♿ **Accessibility** - Improve accessibility features

### **Code of Conduct**
Please be respectful and constructive in all interactions. We're building this together! 🚀

## � Documentation & Resources

### **API Documentation**
- [Next.js 15 Documentation](https://nextjs.org/docs) - Framework documentation
- [React 19 Documentation](https://react.dev/) - React latest features
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Type system guide
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS
- [Radix UI Documentation](https://www.radix-ui.com/) - Accessible components

### **Learning Resources**
- **Next.js App Router** - Modern routing and layouts
- **Server Components** - Performance optimization
- **TypeScript Best Practices** - Type-safe development
- **Accessibility Guidelines** - WCAG 2.1 compliance
- **Responsive Design** - Mobile-first development

### **Useful Links**
- 🎨 [Aceternity UI Components](https://ui.aceternity.com/) - Enhanced UI library
- 🎯 [Radix UI Primitives](https://www.radix-ui.com/primitives) - Accessible components
- 🖼️ [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- 🎨 [Tailwind CSS Classes](https://tailwindcss.com/docs/utility-first) - Utility classes
- 📱 [Responsive Design Guide](https://tailwindcss.com/docs/responsive-design) - Mobile optimization

## 🛡️ Security

### **Security Measures**
- **Type Safety** - TypeScript prevents runtime errors
- **Input Validation** - Zod schema validation for all forms
- **XSS Protection** - React's built-in XSS prevention
- **CSRF Protection** - Next.js automatic CSRF protection
- **Secure Headers** - Security headers configuration

### **Best Practices**
- Regular dependency updates
- Environment variable protection
- Input sanitization
- Authentication ready structure
- Role-based access control ready

## 🐛 Troubleshooting

### **Common Issues**

#### **Build Errors**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### **TypeScript Errors**
```bash
# Check TypeScript configuration
pnpm tsc --noEmit

# Update TypeScript
pnpm update typescript
```

#### **Styling Issues**
```bash
# Rebuild Tailwind CSS
pnpm build

# Clear browser cache
# Hard refresh (Ctrl+F5 or Cmd+Shift+R)
```

### **Getting Help**
- 📝 [Create an Issue](https://github.com/sy17258/Teacher-Management-Interface/issues) - Report bugs or request features
- 💬 [Discussions](https://github.com/sy17258/Teacher-Management-Interface/discussions) - Ask questions and share ideas
- 📧 **Email Support** - Contact the maintainers directly

## �📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **What this means:**
- ✅ **Commercial use** - Use in commercial projects
- ✅ **Modification** - Modify the source code
- ✅ **Distribution** - Distribute the software
- ✅ **Private use** - Use for private projects
- ❗ **License and copyright notice** - Include original license

## 🙏 Acknowledgments

Special thanks to the amazing open-source community and these incredible projects:

- **[Next.js Team](https://nextjs.org/)** - For the amazing React framework
- **[Vercel](https://vercel.com/)** - For hosting and deployment platform
- **[Radix UI Team](https://www.radix-ui.com/)** - For accessible component primitives
- **[Aceternity UI](https://ui.aceternity.com/)** - For beautiful enhanced components
- **[Tailwind Labs](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - For the beautiful icon library
- **[TypeScript Team](https://www.typescriptlang.org/)** - For type-safe JavaScript
- **[React Team](https://react.dev/)** - For the amazing UI library

## 📞 Support & Contact

### **Get Help**
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sy17258/Teacher-Management-Interface/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/sy17258/Teacher-Management-Interface/discussions)
- 📧 **Email**: [sy17258@example.com](mailto:sy17258@example.com)
- 💬 **Discord**: Join our development community

### **Project Maintainer**
- **GitHub**: [@sy17258](https://github.com/sy17258)
- **Project**: [Teacher-Management-Interface](https://github.com/sy17258/Teacher-Management-Interface)

---

<div align="center">

**Built with ❤️ for educational institutions worldwide**

*Empowering teachers, engaging students, transforming education*

[![GitHub stars](https://img.shields.io/github/stars/sy17258/Teacher-Management-Interface?style=social)](https://github.com/sy17258/Teacher-Management-Interface/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sy17258/Teacher-Management-Interface?style=social)](https://github.com/sy17258/Teacher-Management-Interface/network/members)

</div>
