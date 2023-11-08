pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from the version control system
                git url: 'https://github.com/safa-abidi/Lab3-DevOps-K8S.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Execute Node.js tests
                echo "testing"
            }
        }
        stage('Build and Deploy') {
            steps {
                // Perform build and deployment steps
                // Example: npm build, deploy to a server, etc.
                echo "building"
            }
        }
    }
}
