---
layout: post
title: 'Statistics in practice: a good beginning for gradient descent wins half'
date: 2019-12-22T17:48:46.582Z
comments: 'true'
---
Surely there have been plenty of stochastic optimization approaches for the training of a neural network, yet no one could be easier than gradient descent as for the understanding of a mathematical processing. It seems to be the reason why most introduction to deep learning choose it as an sample.

During my first experiment of developing a neural network, which is required to be established purely from the most fundamental operation like matrices calculating, 2-dimension signal convolving, etc., to recognize hand-written numbers in an accuracy of over 97 percent, phenomenons like data overflow, overfitting and inefficiencient training came out one after another. Whatever, the negative effect upon the accuracy of recognizing testing data could cause unexpected consequence and redundant work.

> Everything about the convolutional neural network to recognize hand-written numbers appears to be an analog of that in *Neural Network and Deep Learning* by Michael Nielsen. As for a detailed documenration of it, it is recommended to take a view of the article or [access the site](neuralnetworkanddeeplearning.com). Here will be no more detalied illustration of the model except for the following factors in brief.
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

