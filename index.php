<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Family Feud Game</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css"> <!-- Link to the custom styles -->
</head>
<body>
    <!-- Header Section -->
    <header id="game-header">
        <h1>Family Feud</h1>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Game</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rules</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Scores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Game Container -->
    <div id="game-container" class="container">
        <h2>Welcome to Family Feud!</h2>
        <div class="team-controls">
            <button id="start-game" class="btn btn-primary">Start Game</button>
            <button id="submit-answer" class="btn btn-primary">Submit Answer</button>
        </div>
        <div id="countdown-timer">Time Left: <span id="timer">30</span> seconds</div>
        <div id="answer-form" style="display: flex; align-items: center;">
            <input type="text" id="user-answer" class="form-control" placeholder="Enter your answer" />
            <button id="submit-answer" class="btn btn-primary ml-2">Submit</button>
        </div>
        
        <!-- Score Table -->
        <table class="table score-table mt-4">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Team A</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Team B</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        
        <!-- Result Section -->
        <div id="results" class="mt-4">
            <h3>Results</h3>
            <p>Team A vs Team B</p>
            <div id="result"></div>
        </div>
    </div>

    <!-- Bootstrap and jQuery scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        // JavaScript code for game logic can be added here
    </script>
</body>
</html>
