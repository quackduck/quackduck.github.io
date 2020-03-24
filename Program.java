public class Program { 

	public static int[] arr1 = {1, 2, 3, 4};
	public static int[] arr2 = {1, 2, 3, 4, 5, 6, 7, 8};

	public static void main(String[] args) {
		System.out.println("Starting Algo 1 with array length 4");
		new Program().new Algo1().go(arr1);
		System.out.println("Starting Algo 2 with array length 4");
		new Program().new Algo2().go(arr1);
		System.out.println("Starting Algo 1 with array length 8");
		new Program().new Algo1().go(arr2);
		System.out.println("Starting Algo 2 with array length 8");
		new Program().new Algo2().go(arr2);
	} 

	public class Algo1 {


		public void go(int[] thing) {
			long startMillis = System.currentTimeMillis();
			for (int i : thing) {
				System.out.println(i);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {e.printStackTrace();}
			}
			long endMillis = System.currentTimeMillis();
			System.out.println("Algo 1 took " + (endMillis - startMillis) + " Millis");
		}

	}

	public class Algo2 {


		public void go(int[] thing) {
			long startMillis = System.currentTimeMillis();
			for (int i : thing) {
				System.out.println(i);
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {e.printStackTrace();}
			}
			long endMillis = System.currentTimeMillis();
			System.out.println("Algo 2 took " + (endMillis - startMillis) + " Millis");
		}

	}

} 