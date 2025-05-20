package server

// zerologRequestLogger logs request details using zerolog
// func zerologRequestLogger(next echo.HandlerFunc) echo.HandlerFunc {
// 	return func(c echo.Context) error {
// 		start := time.Now()
// 		req := c.Request()
// 		res := c.Response()

// 		err := next(c)

// 		stop := time.Now()
// 		duration := stop.Sub(start)

// 		logger := log.Info()
// 		if err != nil {
// 			logger = log.Error().Err(err)
// 			c.Error(err)
// 		}

// 		logger.Str("method", req.Method).
// 			Str("uri", req.RequestURI).
// 			Str("remote_ip", c.RealIP()).
// 			Str("user_agent", req.UserAgent()).
// 			Int("status", res.Status).
// 			Dur("duration_ms", duration).
// 			Msg("request completed")

// 		return nil
// 	}
// }

// // zerologRecoverer recovers from panics and logs them using zerolog
// func zerologRecoverer(next echo.HandlerFunc) echo.HandlerFunc {
// 	return func(c echo.Context) error {
// 		defer func() {
// 			if r := recover(); r != nil {
// 				err, ok := r.(error)
// 				if !ok {
// 					err = fmt.Errorf("%v", r)
// 				}
// 				stack := debug.Stack()

// 				log.Error().
// 					Err(err).
// 					Str("uri", c.Request().RequestURI).
// 					Msg("panic recovered")

// 				fmt.Fprintf(os.Stderr, "\n--- Stack Trace ---\n%s\n-------------------\n", string(stack))

// 				c.Error(echo.NewHTTPError(http.StatusInternalServerError, "Internal Server Error"))
// 			}
// 		}()
// 		return next(c)
// 	}
// }
