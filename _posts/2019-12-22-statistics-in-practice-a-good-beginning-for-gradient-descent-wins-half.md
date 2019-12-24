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

The individual contains 4 categorical variables with `Dataset`, `Subnet 1`, `Subnet 2` and `Loss function` included, and 5 quantitive with `Accuracy`, `Step`, `Momentum`, `Batch` and `Epoch` included. Btw. the `Subnet 1` refes to the feature extraction subnet essentially the convolutional neural network and the `Subnet 2` refers to the classifier subnet.

| Dataset     | Subnet 1    | Subnet 2    | Loss function |
| ----------- | ----------- | ----------- | ------------- |
| categorical | categorical | categorical | categorical   |

| Accuracy   | Step       | Momentum   | Batch      | Epoch      |
| ---------- | ---------- | ---------- | ---------- | ---------- |
| quantitive | quantitive | quantitive | quantitive | quantitive |

As the individual collected so far, the following variables are available.

* Dataset: MNIST
* Subnet 1: shallow/deep
* Subnet 2: shallow/deep
* Loss function: MSE
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

The fisrt dataset contains 408 individuals in total. With a same dataset, network model and batch, the valid variables include  accuracy, step, momentum and epoch.

The second dataset contains 240 individuals in total. The valid variables include, accuracy, step, batch and epochs.

Please check [analytic chart for dataset 1](https://riumin.net/assets/uploads/dataset1.htm) and [analytic chart for dataset 2](https://riumin.net/assets/uploads/dataset2.htm) for detailed chart of distribution and further analysis.

# What to analyse?

Our goal is to find out the best settings for those factors before our training starts, best of which could reach a most accurate model. Thus, let's start with the correlation tests first.

## Hypothsis of Pearson correlation coefficient tested by Chi-square

There are plenty of statistical approach for analysing the correlation between  factors, one of which is to analyse with [**Pearsn correlation coefficient**](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient). Pearson correlation coefficient is employed for a wide range from two-factor analysis to the  complicated correlation for its fundamentality as its essense of *the sum of Euclidean distance from the sample to its regressive line in mathematical space*.

> When employed for a sample, Pearson correlation coefficient is usually calculated as 
> 
> $$\displaystyle r_{xy}=\frac{ \sum _{i=1}^{n}(x_{i}-{\bar {x}})(y_{i}-{\bar {y}})}{\sqrt \sum _{i=1}^{n}(x_{i}-{\bar {x}})^{2}\sqrt \sum _{i=1}^{n}(y_{i}-{\bar {y}})^{2}}$$
> 
> where:
> * $$n$$ is sample size
> * $$x_{i},y_{i}$$ are the individual sample points indexed with $$i$$
> * $${\displaystyle {\bar {x}}={\frac {1}{n}}\sum _{i=1}^{n}x_{i}}$$ (the sample mean); and analogously for $$\displaystyle\bar{y}$$

The question is how to properly fit  Pearson's correlation coefficient foran acceptable assumption. Let's ensure you still remember everything about how to set a hypothesis and then test its significance. To test the correlation between the accuracy and the other valid factors in the first dataset collected in an approach of stochastic gradient descent, a null hypothesis and the alternative first shall be set as:

$$\begin{aligned} & H_0:\text{ There is association between accuracy and learning rate.} \\
& H_a: \text{ There is no association between accuracy and learning rate }\end{aligned}$$

> So it is for other factors in dataset 1 like momentum and epoch.

It calculates to be $$-0.764$$ with a two-tailed significance level of approximately $$0$$, which could cause the hypothesis accepted.

- Pearson correlation coefficients and two-tailed significance level between accuracy and other valid factors in dataset 1

|Which to have association with accuracy|Step|Momentum|Epoch|
|:-:|:-:|:-:|:-:|
|Pearson correlation coefficient|-0.764|-0.209|-.025|
|Two-tailed signicance level|0.000|0.000|0.612|

According to the consequence calculated, apparently `step` and `momentum` have an accepted association with accuracy. The negative coefficient illustrates that as the step or momentum grows, the accuracy tends to decrease. The \`slopes' (say) of `step` and `momentum` each reflect a different scale of diffference it makes to the variaiton of accuracy as well. At the same time, both of their cramer's V provide the proof for the phenomenon. (Please check the chart)

- Cramer's V of the accepted correlated factors with accuracy in dataset 1

|Which correlated with accuracy|Step|Momentum|
|:-:|:-:|:-:|
|Cramer's V|0.491|0.269|

> Cramer's V is calculated to figure out the association between two samples with muliple classification. It's restricted within $$[0,1]$$ and measures how great two samples correlate with different value.
> 
> |Magnitude of effect size|Value of Cramer's V|
> |:-:|:-:|
> |Small|0.1|
> |Meium *or* Moderate| 0.3|
> |Large|0.5|
> 
> Thus we could conclude that the learning rate and the momentum each makes a big and moderate difference to the accuracy.

Take the same operation to dataset 2 and generate the folowing consequence.

- Pearson correlation coefficients and two-tailed significance level between accuracy and other valid factors in dataset 2

|Which to have association with accuracy|Step|Batch|Epoch|
|:-:|:-:|:-:|:-:|
|Pearson correlation coefficient|0.468|-0.343|0.216|
|Two-tailed signicance level|0.000|0.000|0.001|

- Cramer's V of the accepted correlated factors with accuracy in dataset 2

|Which correlated with accuracy|Step|Batch|Epochs|
|:-:|:-:|:-:|:-:|
|Cramer's V|0.485|0.270|0.238|

To have a better understanding of how those factors correlate, the crosstab(please check the chart) and bar chart are provided as well.

> The accuracy has been binned into quarters for better generality of crosstab. It could cause the marginal distribution of crosstab no long valid. The bar chart reflects only conditional distribution of the sample.

- Segmented quarter section of accuracy in dataset 1

![](/assets/uploads/dataset1.step-accuracy.jpg)

![](/assets/uploads/dataset1.momentum-accuracy.jpg)


|Grid of accuracy in dataset 1|quarter|
|:-:|:-:|
|$$[\sim,0.09820)$$|1|
|$$[0.09820,0.96455)$$|2|
|$$[0.96455,0.98545)$$|3|
|$$[0.98545,\sim)$$|4|

- Segmented quarter section of accuracy in dataset 2

![](/assets/uploads/dataset2.step-accuracy.jpg)

![](/assets/uploads/dataset2.batch-accuracy.jpg)

![](/assets/uploads/dataset2.epoch-accuracy.jpg)

|Grid of accuracy in dataset 2|quarter|
|:-:|:-:|
|$$[\sim,0.91345)$$|1|
|$$[0.91345,0.97295)$$|2|
|$$[0.97295,0.98410)$$|3|
|$$[0.98410,\sim)$$|4|

## Summary

The statistical analysis above seems to generate the answers to those hypotheses in the very begining.  Learning rate always plays a \'significant' role in both stochastic gradient descent (dataset 1) and batch gradient descent (dataset 2). A smaller learning rate is better than a greater for the former while versus for the later. Smaller momentum is better for stochastic gradient descent. Smaller scale of batch and more epochs of traning is recommended for batch gradient descent.


# What's wrong with the conclusion so far?

Wait a minute, don't you feel something weird about the rough conclusion above? Condering the recommendation for the stochastic gradient descent approach (dataset 1) is correct, what could happen if we execute those for the batch? The learning rate keeps growing, the scale of batch keeps shrinking and the epochs of training keeps lengthening. What the hell could that be? A long lasting inefficient approach faced with the situation of the former!

Even though those two recommendations could be explained theorically by the property and bound of gradient descent as stochastic optimization, you cannot persuade yourself in practice. Actually the conclusion so far has much too different from the phenomenons observed during my pervious experiment. The stochastic gradient descent is extremely unstable and batch promotion cannot be absent and a greater learning rate always cause a \`dumb' model (say). If nothing wrong with the correlation found out so far, there has to be something unrevealed within those factors.


# There has to be some correlation between those factors yet

Theoretically I can tell the a greater learning rate is nothing suitable for a smaller scale of batch. The reason why prompt the original stochastic gradient descent approach lies exactly its instability and to fix to decay the learning rate or to take an average of more losses backward propagated. It feels correct to pair smaller learning rate with smaller scale of batch and vice versus.

It stroke me something wrong with the inner distribution when I take a view of the conditional distribution of those crosstabs (please check the chart). Those two crosstabs generated from dataset 1 and three from dataset 2 seem to have similar or just opposite conditional distribution, which suggest somehing be correlated. Thus I take an analysis partial correlation.

- Partial correlation coefficient and its significance level with accuarcy as the contral variables in dataset 1



|What to do with the following|Step|Momentum|
|:-:|:-:|:-:|
|Step||Coefficient: -0.505<br/>Sig(two-tailed): 0.000|
|Momentum|

- Partial correlation coefficient and its significance level with accuarcy as the contral variables in dataset 2



|What to do with the following|Step|Batch|Epoch|
|:-:|:-:|:-:|:-:|
|Step||Coefficient: 0.408<br/>Sig(two-tailed): 0.000|Coefficient: -0.322<br/>Sig(two-tailed): 0.000|
|Batch|||Coefficient: 0.153<br/>Sig(two-tailed): 0.018|
|Epoch||||

It is believed the analysis of partial correlation with accuracy as the contral variable above has chased away the puzzles raised just now in your hear 'cause that's what happed to me. It's acceptable that:
 
- When the accuracy grows for a model trained with an approach of stochastic gradient descent, the learning rate tends to be smaller with greater momentum, which helps with the redirection in the mathematical space scaled by the neural network moel.
- A greater learning rate tends to come with greater scale of batch in less epochs to reach the optimal or suboptimal point in the mathematical space.

# Conclusion

The batch gradient descent cost less time than the stochastic 'cause of its less calculation to \`propagation backward' amid an epoch (say, most of the framework just record the gradient as the forward propagation processed). It's certainly fascinating to cut off the time spent on calculation with the accuracy kept. A whole progress of training a neural network, especially a deeper one, could be dozens of minutes and even hours, to test it not mentioned. This fact combined with the puzzles raised during my experiment encouraged me to do a tiny statistical study upon those complicated accuracy raise one after another under varying factores, to figure out something felt beneath the surface in a persuading way.

It could be a little funny to prompt the accuracy for $$0.1$$ more percentage, yet the individuals for a neural network in practice could be millions. It's far away enough to achieve an accuracy of even one percent to one outside of laboratory. Whatever, a littler more efficiency plays well. Who could get stubborn on  stochastic gradient descent with redundant  calculation in contrast with a faster batch gradient descent?
