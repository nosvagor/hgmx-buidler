# HGMX Component Library

> A boutique, command-driven component library built with Go Templ, HTMX, and Hyperscript

## Vision

In an age where UI can be instantly generated, this library takes a different approach - crafting thoughtful, unique components with small touches that make them special. 


## Core Philosophy

1. **Boutique Components**: Each component should feel artisan crafted, yet customizable
2. **Opinionated First Principles**: Start minimal, with opinionated defaults to manage complexity
3. **HATEOAS**: Hypermedia driven state management
4. **Semantic Theming**: Rich color system with semantic variables for easy theme adjustments
5. **Reimagining Navigation**: Encourage command-driven navigation and with beautiful and simple navigation elements.


#### Navigation
We're building toward a future where traditional navigation patterns are seen as temporary handicaps, replaced by fluid, command-driven interfaces inspired by tools like Neovim's Telescope. They will never be fully replaced, still essential for showing state and context, but ultimately we're exploring new ways of navigation.

### Theme

Traditional dark/light mode toggles are a false dichotomy. Our theming system generates entire color palettes from a single seed color using the perceptually uniform OKLCH color space. This creates harmonious color relationships automatically.

#### How It Works
1. **Seed-Based Generation**: Provide one hex color, get 40+ colors across 11 shades each
2. **Semantic Mappings**: Components use semantic names (primary, error, success) not specific colors
3. **Automatic Relationships**: Colors are generated with proper contrast ratios and perceptual balance
4. **Runtime Flexibility**: Swap entire themes by changing root CSS variables, no component changes needed

#### Semantic Motifs
```
Signaling: info, success, warning, error
Branding:  primary, secondary, accent  
States:    positive/negative, true/false, in/out
Actions:   change, link, delete
```

Each motif maps to a color pair for subtle variations to add another simple dimension to add choice themes. 

## Architecture

```
views/
├── blocks/          # Component groups
│   ├── content/      
│   ├── forms/     
│   ├── layouts/    
│   └── navigation/
├── components/      # Individual reusable components
│   ├── action/      
│   ├── display/     
│   ├── feedback/    
│   └── input/       
├── static/          # Static assets (css, js, fonts, svgs, etc)
└── views.templ      
```


## Current Status

### Completed
- [x] Base HTML structure with smart asset hashing
- [x] Rich color system generated from seed color alone.

### In Progress
- [ ] Navigation container

### Roadmap

#### Phase 1: Navigation Foundation
1. **Navbar**
   - [ ] Collapsed 
   - [ ] Inline
   - [ ] Expanded 

2. **Sidebar**
   - [ ] Collapsed
   - [ ] Inline
   - [ ] Expanded

2. **Components on the Radar**:
   - [ ] NavLogo
   - [ ] NavItem
   - [ ] NavButton
   - [ ] NavAvatar
   - [ ] NavSearch
   - [ ] NavMenu

#### Phase 2: Command-Driven Interface
1. **Command Mode**
   - Fuzzy search
   - Action shortcuts
   - Recent/frequent destinations
   - Context-aware suggestions


## Development Approach

### Component Creation Process
1. **Identify Need**: What problem does this solve?
2. **Design API**: How should developers use it?
3. **Start Minimal**: What's the simplest useful version?
4. **Add Thoughtfully**: Each feature should earn its complexity
5. **Unique Touch**: What makes this component special?

### State Management Philosophy
- HTMX for server state 
- Hyperscript for UI state 
- CSS for visual state 
- No client-side framework, small custom js if necessary.

### Styling Strategy
- Tailwind for dynamic and diverse utility classes
- Tailwind layers for common/static or complex styles applied to components
- Semantic color variables for consistency 
