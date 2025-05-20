package server

// NewRouter creates and configures a new Echo instance.
// func NewRouter() *echo.Echo {

// 	e := echo.New()

// 	// --- Middleware ---
// 	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr, TimeFormat: time.RFC3339})
// 	zerolog.SetGlobalLevel(zerolog.InfoLevel)
// 	e.Use(zerologRequestLogger)
// 	e.Use(zerologRecoverer)

// 	// --- Static Files ---
// 	e.Static("/static", "static")

// 	// --- Application Routes ---
// 	// e.GET("/", Index)
// 	// e.GET("/palette", Palette)

// 	return e
// }
