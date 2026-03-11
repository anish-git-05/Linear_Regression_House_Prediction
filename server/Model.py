import numpy as np
import os
BASE_DIR = os.path.dirname(__file__)

weights = np.load(os.path.join(BASE_DIR, "w.npy"))
bias = np.load(os.path.join(BASE_DIR, "b.npy"))
mean = np.load(os.path.join(BASE_DIR, "mean.npy"))
std = np.load(os.path.join(BASE_DIR, "std.npy"))
def predict(features):
    X=np.array(features)
    X[:4] = (X[:4] - mean) / std
    yhat=np.dot(X,weights)+bias
    yhat=round(yhat,2)
    return float(yhat)
