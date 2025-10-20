import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from "@mui/material";

import {
  Menu as MenuIcon,
  LocalLibrary as LocalLibraryIcon,
  MenuBook as MenuBookIcon,
  MonetizationOn as MonetizationOnIcon,
  Article as ArticleIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";

import { Link, Routes, Route } from "react-router-dom";

const drawerWidth = 240;

const pages = [
  { text: "Inicio", icon: <MenuBookIcon />, path: "/inicio" },
  { text: "Catálogo", icon: <MonetizationOnIcon />, path: "/catalogo" },
  { text: "Mi Cuenta", icon: <ArticleIcon />, path: "/myacount" },
];

const settings = [
  { text: "Profile", icon: <AccountCircleIcon /> },
  { text: "Account", icon: <DashboardIcon /> },
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Logout", icon: <LogoutIcon /> },
];

export default function ResponsiveSidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // Contenido del sidebar
  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#1976d2",
        color: "white",
      }}
    >
      <Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <LocalLibraryIcon sx={{ fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Biblioteca
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
        <List>
          {pages.map((page) => (
            <ListItem key={page.text} disablePadding>
              <ListItemButton
                component={Link}
                to={page.path}
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                onClick={() => setMobileOpen(false)} // Cierra el menú en móviles al navegar
              >
                <ListItemIcon sx={{ color: "white" }}>{page.icon}</ListItemIcon>
                <ListItemText primary={page.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Usuario */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Tooltip title="Abrir menú de usuario">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="Usuario" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {settings.map((setting) => (
            <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText>{setting.text}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Barra superior para móviles */}
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none" },
          backgroundColor: "#1976d2",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Biblioteca
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer permanente (escritorio) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Drawer temporal (móviles) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "#f5f5f5",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 8, sm: 0 }, // deja espacio para AppBar en móviles
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Bienvenido a la Biblioteca
              </Typography>
            }
          />
          <Route
            path="/inicio"
            element={<Typography variant="h4">Sección de Inicio</Typography>}
          />
          <Route
            path="/catalogo"
            element={<Typography variant="h4">Sección de Catálogo</Typography>}
          />
          <Route
            path="/myacount"
            element={<Typography variant="h4">Sección Mi Cuenta</Typography>}
          />
        </Routes>
      </Box>
    </Box>
  );
}
