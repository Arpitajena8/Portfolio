# 🐾 Arpita Jena — Cat & Dog Themed Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Design-brightgreen?style=for-the-badge" alt="Responsive">
</div>

## 📋 Table of Contents
- [Overview](#overview)
- [✨ Features](#features)
- [🎨 Color Palette](#color-palette)
- [🚀 Demo](#demo)
- [📁 File Structure](#file-structure)
- [⚡ Quick Start](#quick-start)
- [🛠️ Installation](#installation)
- [🎯 Customization](#customization)
- [📧 Contact Form Setup](#contact-form-setup)
- [♿ Accessibility](#accessibility)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [📞 Contact](#contact)

## Overview

This is the source code for **Arpita Jena's** personal portfolio website — a modern, responsive, and professional portfolio designed with a playful **Cat & Dog theme**. The site features a beautiful teal-to-purple gradient color palette combined with subtle animal-themed elements, creating a perfect balance between personality and professionalism.

Built with vanilla **HTML5**, **CSS3**, and **JavaScript**, this portfolio showcases skills as a Java Full Stack Developer, highlighting projects, experience, and contact information in a fully responsive and accessible design.

## ✨ Features

### 🎨 Design & Theme
- **Unique Cat & Dog Theme**: Playful paw print animations, animal emojis, and themed interactions
- **Beautiful Color Palette**: Sophisticated teal-to-purple gradient design
- **Responsive Design**: Seamless experience across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle with cat 🐱 (dark) and dog 🐕 (light) icons
- **Smooth Animations**: Floating paw prints, hover effects, and smooth transitions

### 🏗️ Technical Features
- **Vanilla JavaScript**: No external libraries or frameworks required
- **CSS Grid & Flexbox**: Modern, flexible layouts
- **Sticky Navigation**: Transparent navbar that changes on scroll
- **Form Validation**: Contact form with playful error messages
- **Local Storage**: Theme preference persistence
- **Accessibility**: ARIA labels, keyboard navigation, and focus management

### 📱 Sections
1. **Home/Landing**: Animated hero section with floating paw prints
2. **About Me**: Personal introduction with cat/dog metaphors
3. **Skills**: Interactive badges with hover animations
4. **Projects**: Showcase cards with animal-themed descriptions
5. **Experience**: Timeline of work history and certifications
6. **Contact**: Social links and functional contact form

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Light Teal | `#78B9B5` | Backgrounds, skill badges |
| Medium Teal | `#0F828C` | Buttons, accents |
| Deep Blue | `#065084` | Text, navigation |
| Deep Purple | `#320A6B` | Headers, emphasis |
| White | `#FFFFFF` | Clean backgrounds |
| Light Gray | `#F8F9FA` | Subtle backgrounds |

## 🚀 Demo

🔗 **Live Demo**: [https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/54a886434e4998bd21fe4a2b9b49752c/b21c6a3e-27e5-4ba7-bffa-d04169c612d2/index.html](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/54a886434e4998bd21fe4a2b9b49752c/b21c6a3e-27e5-4ba7-bffa-d04169c612d2/index.html)

## 📁 File Structure

```
arpita-jena-portfolio/
│
├── 📄 index.html                 # Main HTML structure
├── 🎨 style.css                  # CSS styling and animations
├── ⚡ app.js                     # JavaScript functionality
├── 📖 README.md                  # Project documentation
├── 📄 LICENSE                    # MIT License
├── 🖼️ profile-placeholder.jpg    # Profile image (replace with yours)
└── 🎯 favicon.png                # Website favicon (optional)
```

## ⚡ Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/arpita-jena-portfolio.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd arpita-jena-portfolio
   ```

3. **Open in browser**:
   - Simply open `index.html` in your favorite web browser
   - Or use a local server for development:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (with live-server)
   npx live-server
   ```

## 🛠️ Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for customization

### Steps
1. **Download or clone the repository**
2. **Replace placeholder content**:
   - Update personal information in `index.html`
   - Replace `profile-placeholder.jpg` with your photo
   - Add your actual social media and project links
3. **Customize colors/styles** in `style.css` if desired
4. **Test locally** by opening `index.html` in a browser

## 🎯 Customization

### Personal Information
Edit `index.html` to update:
- Your name and tagline
- About me section content
- Skills and technologies
- Project descriptions and links
- Contact information

### Styling
Modify `style.css` to:
- Change color scheme (update CSS custom properties)
- Adjust fonts or typography
- Modify animations and transitions
- Add new sections or components

### Functionality
Enhance `app.js` to:
- Add new interactive features
- Integrate analytics tracking
- Connect contact form to backend services
- Add more animations or effects

## 📧 Contact Form Setup

The contact form currently uses frontend validation only. To make it functional:

### Option 1: FormSubmit (Easiest)
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <!-- Your form fields -->
</form>
```

### Option 2: Netlify Forms
Add `netlify` attribute to your form tag:
```html
<form netlify name="contact">
    <!-- Your form fields -->
</form>
```

### Option 3: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add the EmailJS SDK
3. Configure email templates and service

## ♿ Accessibility

This portfolio includes:
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus indicators for interactive elements
- ✅ Color contrast compliance
- ✅ Screen reader friendly content

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Guidelines
- Follow existing code style and formatting
- Test your changes across different browsers and devices
- Add comments for complex functionality
- Update documentation if needed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Google Fonts**: Typography (Nunito, Fredoka One, Inter)

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Fully Supported |
| Firefox | ✅ Fully Supported |
| Safari | ✅ Fully Supported |
| Edge | ✅ Fully Supported |
| IE 11 | ⚠️ Partial Support |

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: (leave empty or set to root)
4. Deploy!

### Vercel
1. Import your GitHub repository to Vercel
2. Configure project settings (usually auto-detected)
3. Deploy with one click

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Arpita Jena's passion for technology and love for animals
- Font credits: [Google Fonts](https://fonts.google.com/)
- Color palette inspiration from modern web design trends
- Cat and dog emojis add personality while maintaining professionalism

## 📞 Contact

**Arpita Jena**
- 📧 Email: [arpita.jena123@gmail.com](mailto:arpita.jena123@gmail.com)
- 💼 LinkedIn: [https://linkedin.com/in/arpita-jena](https://linkedin.com/in/arpita-jena)
- 🐙 GitHub: [https://github.com/arpitajena](https://github.com/arpitajena)

---

<div align="center">
  <p>Made with 💖 and lots of ☕ by Arpita Jena</p>
  <p>🐱 Meow! 🐕 Woof! 🐾 Thanks for visiting!</p>
</div>
