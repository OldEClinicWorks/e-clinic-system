// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::io::Result;
use std::process::Command;

// mod db;

fn start_node_server() -> Result<()> {
    let node_command = "node";
    let script_path = "../backend/build/index.js"; // Adjust the path to your Node.js script
    let output = Command::new(node_command)
        .arg(script_path)
        .spawn()?
        .wait_with_output()?;

    if output.status.success() {
        println!("Node.js server started successfully!");
    } else {
        eprintln!(
            "Failed to start Node.js server:\n{}",
            String::from_utf8_lossy(&output.stderr)
        );
    }

    Ok(())
}

fn main() {
    // Start your Node.js server as a child process
    if let Err(err) = start_node_server() {
        eprintln!("Error starting Node.js server: {:?}", err);
        return;
    }
    // Create a new Tauri application builder with default settings.
    tauri::Builder::default()
        .setup(|_app| {
            // Initialize the database.
            // db::init();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
