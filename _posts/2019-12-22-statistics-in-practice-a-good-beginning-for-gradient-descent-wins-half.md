---
layout: post
title: 'Statistics in practice: a good beginning for gradient descent wins half'
date: 2019-12-22T17:48:46.582Z
comments: 'true'
---
Surely there have been plenty of stochastic optimization approaches for the training of a neural network, yet no one could be easier than gradient descent as for the understanding of a mathematical processing. It seems to be the reason why most introduction to deep learning choose it as an sample.

During my first experiment of developing a neural network, which is required to be established purely from the most fundamental operation like matrices calculating, 2-dimension signal convolving, etc., to recognize hand-written numbers in an accuracy of over 97 percent, phenomenons like data overflow, overfitting and inefficiencient training came out one after another. Whatever, the negative effect upon the accuracy of recognizing testing data could cause unexpected consequence and redundant work.

> Everything about the convolutional neural network to recognize hand-written numbers appears to be an analog of that in *Neural Network and Deep Learning* by Michael Nielsen. As for a detailed documenration of it, it is recommended to take a view of the article or [access the site](neuralnetworkanddeeplearning.com). Here will be no more detalied illustration of the model except for the following factors in brief.
>
> * A neural network with a feature extraction subnet, essentially convolutional neural network, and a classifier subnet
> * Gradient descent as an approach of stochastic optimization with backpropagation algorithms to propagate backward the gradients in respect of kernels or weight matrices
> * Momentum algorithm as the promotion of gradient descent
> * Recitified Linera Unit function as the activation function of the whole network except for the output layer activated with softmax function in condition where the output requited to be one-hot coding.

After some time of testing, it came to be the following phenomenons:

* When a greater learning rate set, the parameters tended to overflow.
* When a greater scale of batch set, the variation of accuracy tended to be more stable.
* When a greater momentum rate set, the variation of accuracy tended to be more unstable.
* When a deeper network developed, the growth of accuracy seemed to be faster.
* As the epoch of training passed, most of the time the accuracy kept growing till high stable while sometimes the accuracy could decrease continously.

It could puzzle you with dozens of hypothesis involving varied relation with the the accuracy of the model. However, an approach coming out with ease might be just to test the model in different learningg rate, batch, etc. and to collect each test as an individual for test. It's really easy with open source machine learning framework like `tensorflow` or `pytorch` and applicatioon for statistical analysis. As for me it comes out to be `pytorch` and `SPSS` by IBM, which is developed with java and provides full functionality for statistical analysis.

# Individual

The individual contains 5 categorical variables with `Dataset`, `Subnet 1`, `Subnet 2`, `Loss function` and `Validation` included, and 5 quantitive with `Accuracy`, `Step`, `Momentum`, `Batch` and `Epoch` included. Btw. the `Subnet 1` refes to the feature extraction subnet essentially the convolutional neural network and the `Subnet 2` refers to the classifier subnet. As for `Validation` the variable comes to be `valid` if the accuracy lies equal or above 97 percent or `invalid` if below.

| Dataset     | Subnet 1    | Subnet 2    | Loss function | Validation  | Accuracy   | Step       | Momentum   | Batch      | Epoch      |
| ----------- | ----------- | ----------- | ------------- | ----------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| categorical | categorical | categorical | categorical   | categorical | quantitive | quantitive | quantitive | quantitive | quantitive |

As the individual collected so far, the following variables are available.

* Dataset: MNIST
* Subnet 1: shallow/deep
* Subnet 2: shallow/deep
* Loss function: MSE
* Validation: valid/invalid
* Accuracy: $$[0,1]$$
* Step: 0.01/0.05/0.1/0.5/0.7
* Momentum: 0/0.1/0.3/0.5/0.7/0.9
* Batch: 5/20/50/100
* Epoch: up to 15 epochs to detect overfitting

> * Why full epochs recorded instead of the eventual consequence?
>
> To balance the efficiency and overfitting during the training, it's assumed an accuracy record of full epochs could reflect the info of the whole process.

# A brief distribution of the collected variables

There are in total two sets of data, one of which is collected with a stochastic gradient descent approach (which means  the batch variable of all the individuals is 1) while another without momentum. The reason for the separate and restricted datasets lies that theoretically both momentum and batch (also surnamed mini-batch) appear to be a promosion of the original gradient descent as stochastic optimization and to collect a dataset with every single factor from A to Z just costs terribly much time. It's better to find out the association in a properly simplified conditions as well. 

The fisrt dataset contains 408 individuals in total. With a same dataset, network model and batch, the valid variables include validation,  accuracy, step, momentum and epoch.

The second dataset contains 240 individuals in total. The valid variables include validation, accuracy, step, batch and epochs.

Please refers to 

# Learning rate seems to make the most difference to accuracy

According to the individual of first dataset, the one by stochastic gradient descent approach, I found out that
