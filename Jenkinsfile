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
                                echo "Hello From Riyad" >> file.txt
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


// pipeline {
//     agent any
//     stages {
//         stage('Deploy on Instance') {
//             steps {
//                 script {
//                     // Execute SSH command and wait for completion
//                     sshagent(['ssh-agent']) {
//                         def sshResult = sh(script: """
//                             ssh -o StrictHostKeyChecking=no ubuntu@54.72.122.253 '
//                                 docker stop ry || true &&
//                                 docker rm ry || true &&
//                                 docker rmi riyadm44/djangonewsimage || true &&
//                                 docker pull riyadm44/djangonewsimage:latest &&                                
//                                 docker run -d -p 8000:8000 --name ry riyadm44/djangonewsimage '
//                             """, returnStatus: true)
//                         if (sshResult != 0) {
//                             error "SSH connection failed"
//                         }
//                     }
//                 }
//             }
//         }   
//     }
// }
