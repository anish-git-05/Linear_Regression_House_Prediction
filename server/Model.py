import numpy as np

weights=np.load('w.npy') 
bias=np.load('b.npy')
mean = np.load("mean.npy")
std = np.load("std.npy")
def predict(features):
    X=np.array(features)
    X[:4] = (X[:4] - mean) / std
    yhat=np.dot(X,weights)+bias
    yhat=round(yhat,2)
    return float(yhat)
