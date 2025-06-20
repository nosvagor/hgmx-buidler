package web

import (
	"github.com/labstack/echo/v4"
	"github.com/nosvagor/hgmx-builder/views/components/navigation"
)

func NewNavbar(c echo.Context) *navigation.NavbarProps {
	// TODO: do stuff with context and application config to fullfill navbar props
	return &navigation.NavbarProps{
		App: "HGMX",
		Links: []navigation.PageLink{
			{Label: "Docs", URL: "/docs"},
			{Label: "Palette", URL: "/palette"},
			{Label: "Showcase", URL: "/showcase"},
			{Label: "Blog", URL: "/blog"},
		},
		CTA: &navigation.PageLink{
			Label: "Download",
			URL:   "/download",
		},
		Account: []navigation.PageLink{
			{Label: "Profile", URL: "/profile"},
			{Label: "Billing", URL: "/billing"},
			{Label: "Settings", URL: "/settings"},
			{Label: "Sign out", URL: "/signout"},
		},
	}
}
