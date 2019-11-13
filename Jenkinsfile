pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:8.16.0'
        }

      }
      steps {
        sh 'yarn'
      }
    }

    stage('Test') {
      steps {
        sh 'sh \'./jenkins/scripts/test.sh\''
      }
    }

  }
}