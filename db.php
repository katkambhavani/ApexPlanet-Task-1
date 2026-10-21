
<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "apexplanet_task1";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "Database connected successfully!";
?>
