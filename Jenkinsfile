pipeline {
    agent any
    stages {
        stage('Deploy on Instance') {
            steps {
                script {
                    // Execute SSH command and wait for completion
                    sshagent(['ssh-agent']) {
                        def sshResult = sh(script: """
                            ssh -o StrictHostKeyChecking=no ubuntu@54.72.122.253 '
                                echo "Hello From Riyad" >> file.txt'
                            """, returnStatus: true)
                        if (sshResult != 0) {
                            error "SSH connection failed"
                        }
                    }
                }
            }
        }   
    }
}
